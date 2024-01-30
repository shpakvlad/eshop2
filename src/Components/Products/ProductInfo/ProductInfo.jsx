import styles from './ProductInfo.module.scss';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
// import Footer from "../../Footer/Footer";

const ProductInfo = () => {

    // let navigate = useNavigate();
    //
    // function BacktoShop() {
    //     navigate('/');
    // }

    let {prodID} = useParams();
    let [product, setProduct] = useState({});
    let [productQuantity, setQuantity] = useState(1);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${prodID}`)
            .then(response => setProduct(response.data))
            .catch(e => console.log('Error!!! ' + e.text));
    }, []);

    function addToCart() {
        if (productQuantity <= product.stock && productQuantity >= 1) {
            alert("Products added to cart! \n" +
                `Quantity: ${productQuantity}\n` +
                `Price: ${product.price}$\n` +
                `Total: ${productQuantity * product.price}$`);
        } else {
            alert("Enter right quantity!");
        }
    }

    function changeQuantityHandler(e) {
        setQuantity(e.currentTarget.value);
    }

    return (
        <div className="ProductInfo">
            <div className="wrapper">
                <div className={styles.productContent}>

                    {/*<div className="images">*/}
                        <img src={product.thumbnail} alt=""/>
                    {/*</div>*/}

                    <div className={styles.productData}>
                        <div className="product--info">
                            <h2 className={styles.productHeader}>{product.title}</h2>
                            <p className={styles.productDescription}>{product.description}</p>
                            <h3 className={styles.instock}>{`In stock: ${product.stock} pcs.`}</h3>
                            <div className={styles.quantity}>
                                <p className={styles.productQuantityHeader}>Quantity: </p>
                                <input className={styles.inputQuantity} type="number" placeholder="1" min="1" max={product.stock}
                                       onChange={changeQuantityHandler}/>
                            </div>
                            <p className={styles.productPrice}>{`Price: ${product.price}$`}</p>
                        </div>

                        <button className={styles.addtoCartBtn} onClick={addToCart}>Add to cart</button>
                    </div>

                    {/*<button onClick={() => BacktoShop()}>Back</button>*/}
                </div>
            </div>

            {/*<Footer/>*/}
        </div>
    )
}


export default ProductInfo;