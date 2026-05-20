import { useEffect, useState } from "react";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [charging, setCharging] = useState(true);

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al cargar los productos");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCharging(false);
            })
    }, []);

    if (charging) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return <ItemList products={products}/>;
}

export default ItemListContainer;   