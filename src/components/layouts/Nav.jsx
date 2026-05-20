import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <img src="/geris.ico" alt="Geris Studio Logo" className={styles.logo} />
            </div>
            <ul className={styles.navList}>
                <li>
                    <Link to="/" className={styles.navItem}>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/productos" className={styles.navItem}>
                        Productos
                    </Link>
                </li>
                <li>
                    <Link to="/carrito" className={styles.navItem}>
                        Carrito
                    </Link>
                </li>
                <li>
                    <Link to="/contacto" className={styles.navItem}>
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;