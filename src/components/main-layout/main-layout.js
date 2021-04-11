import { BrowserRouter as Router, Link } from 'react-router-dom';
import Styles from "./main-layout.module.css";

export const MainLayout = ({ children }) => (
    <>
        <header className={Styles.header}>
            <nav className={Styles.container}>
                <ul className={Styles.menu}>
                    <li className={Styles.menuItem}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className={Styles.menuItem}>
                        <Link to="/hidden-movies">
                            Hidden movies
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main className={Styles.main}>
            <div className={Styles.container}>{children}</div>
        </main>
    </>
);
