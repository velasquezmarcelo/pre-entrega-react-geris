import { Link } from "react-router-dom";
import styles from "./Item.module.css";
import { useState } from "react";


const Item = ({nombre, precio, stock, imagen, id}) => {

    const [amount, setAmount] = useState(0);
    const [favorite, setFavorite] = useState(false);    

    const toggleFavorite = () => {
        setFavorite(!favorite);
    };

    const increase = () => {
        if (amount < stock)
            setAmount(amount + 1)
    };

    const decrease = () => {
        if (amount > 0)
            setAmount(amount - 1)
    }
    
    return (
        <div className={styles.productosContainer}>
            <Link to={`/item/${id}`}> 
                    <img src={imagen} alt={nombre} />      
                <h3>{nombre}</h3>
                <img src={imagen}/>
                <span
                    onClick={toggleFavorite}
                    className={styles.star}
                    style={{ '--color-star': favorite ? 'yellow' : 'white' }}
                    >
                    {favorite ? '★' : '☆'}    
                </span>
                <h4>${precio}</h4>
                <button onClick={decrease}>-</button>
                <span>{amount}</span>
                <button onClick={increase}>+</button>
            </Link>
        </div>
    );
}

export default Item;