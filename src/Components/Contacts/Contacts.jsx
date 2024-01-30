import styles from './Contacts.module.scss'
import Map from '../Map/Map';

function Contacts() {
    return (
        <section id="contacts">
            <div className="wrapper">
                <h2>Contacts</h2>

                <div className={styles.contacts__info}>
                    <Map/>

                    <div className={styles.addresses}>
                        <div className="phone">
                            <p className={styles.contacts__header}>Phone</p>
                            <a className={styles.contacts__link} href="tel:+322223">+322223</a>
                        </div>
                        <div className="email">
                            <p className={styles.contacts__header}>E-mail</p>
                            <a className={styles.contacts__link} href="mailto:admin@mail.com">admin@mail.com</a>
                        </div>
                        <div className="address">
                            <p className={styles.contacts__header}>Address</p>
                            <p className={styles.contacts__header}>Anywere. Noname,23.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contacts;