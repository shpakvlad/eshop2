import React from "react";
import styles from'./Header.module.scss';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <p className={styles.header__logo}>E-shop</p>

                <nav className={styles.header__nav}>
                    <Link className={styles.header__navlink} to="/shop">Shop</Link>
                    <a className={styles.header__navlink} href="#about">About</a>
                    <a className={styles.header__navlink} href="#contacts">Contacts</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;