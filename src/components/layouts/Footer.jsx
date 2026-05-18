import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <h3 className={styles.title}>GERIS studio</h3>

        <p className={styles.description}>
            Estudio gráfico creativo especializado en diseño visual, identidad de marca e impresión personalizada.
        </p>

        <div className={styles.cardsContainer}>
            <div className={styles.card}>
            <h4>Marcelo Velasquez</h4>
            <p>Full-Stack Developer</p>
            </div>

            <div className={styles.card}>
            <h4>Ivana Singh</h4>
            <p>Marketing y Diseño</p>
            </div>

        </div>
        </footer>
    );
    };

    export default Footer;