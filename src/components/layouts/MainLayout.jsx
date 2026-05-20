import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
    return (
        <div className={styles.container}> 
            <Header/>
                <main className={styles.main}>
                    <Outlet/>
                </main>
            <Footer/>
        </div>
    )
}

export default MainLayout;