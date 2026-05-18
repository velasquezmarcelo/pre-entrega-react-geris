import ItemListContainer from "../ItemListContainer";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
    return (
        <div className={styles.container}> 
            <h1 className={styles.title}>Geris</h1>
            <h2 className={styles.subtitle}>Lista de Productos</h2>
            <ItemListContainer/>
        </div>
    )
}

export default MainLayout;