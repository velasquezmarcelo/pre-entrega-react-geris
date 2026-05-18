import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <img src="/geris.ico" alt="Geris Studio Logo" className={styles.logo} />
            </div>
            <ul className={styles.navList}>
                <li className={styles.navItem}>Inicio</li>
                <li className={styles.navItem}>Productos</li>
                <li className={styles.navItem}>Carrito</li>
                <li className={styles.navItem}>Contacto</li>
            </ul>
        </nav>
    );
};

export default Nav;