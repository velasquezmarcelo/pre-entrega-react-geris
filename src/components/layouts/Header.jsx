import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Geris Studio</h1>
            <p className={styles.slogan}>Dale forma a tus ideas</p>
        </header>
    )
}

export default Header;