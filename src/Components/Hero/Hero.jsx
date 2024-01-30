import {Link} from "react-router-dom";
import React from "react";
import styles from './Hero.module.scss';
// import wrapper from '../../css/reusable.scss'
import background from './cart.jpg';
import Header from "../Header/Header";


const Hero = () => {
    return (
        <section className={styles.Hero} style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundSize: "50vw 140svh",
            objectFit: "none"
        }}>
            <div className="wrapper">
                <Header/>

                <div className={styles.Hero__info}  >
                    <div className={styles.Hero__infoContent}>
                        <h1 className={styles.heading1}>Lorem ipsum. </h1>
                        <h2 className={styles.heading2}>Lorem ipsum dolor sit amet.</h2>

                        <div className={styles.Hero__buttons}>

                            <Link to="/shop">Shop</Link>

                            <a href="#about">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;