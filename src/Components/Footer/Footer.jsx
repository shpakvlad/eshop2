import styles from  './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="wrapper">
                <p>&copy; Shpakov Vladyslav 2024</p>
            </div>
        </footer>
    )
}

export default Footer;