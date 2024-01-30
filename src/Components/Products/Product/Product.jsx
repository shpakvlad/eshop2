import styles from './Product.module.scss';
import {useNavigate} from "react-router-dom";

const Product = ({product}) => {
    let navigate = useNavigate();

    function ShowProdInfo() {
        navigate(`/productinfo/${product.id}`);
    }

    return (
        <div className={styles.Product}>
            <div className={styles.product__info}>
                <img className={styles.productImg} src={product.images[0]} alt=""/>
                <h2 className={styles.productHeader}>{product.title}</h2>
                <p>{product.description}</p>
                <div className={styles.buttonBlock}>
                    <button onClick={() => ShowProdInfo()}>More...</button>
                </div>
            </div>
        </div>
    )
};

export default Product;