import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/data/products.json')
            .then(response => response.json())
            .then(data => {
                const foundProduct = data.find(p => p.id === parseInt(id));
                setProduct(foundProduct);
            })
            .catch(error => console.error('Error al cargar producto:', error));
}, [id]);

if (!product) {
    return <div>Cargando detalle del producto...</div>;
}

if(!product.id) {
    return <div>Producto no encontrado.</div>;
}

return (
    <div>
        <h1>ID {product.id}</h1>
        <h2>Detalle del Producto: {product.name}</h2>
        <img
            src={product.image}
            alt={product.name}
            style={{ maxWidth: '400px'}} 
        />
        <h3>${product.price}</h3>
        <p>{product.description}</p>
    </div>
);
};

export default ProductDetail;