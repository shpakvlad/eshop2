import styles from './ProductsList.module.scss';
import Product from "./Product/Product";
import {useEffect, useState} from "react";
import axios from "axios";

const ProductsList = () => {
    let [products, setProducts] = useState([]);
    let [category, setCategory] = useState('all');
    let [productCategories, setCategories] = useState([]);

    // Load saved category from localStorage on component mount
    useEffect(() => {
        const savedCategory = localStorage.getItem('category');
        if (savedCategory !== null) {
            setCategory(savedCategory);
        }
    }, []);

    // Load product categories
    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories?limit=0')
            .then(response => setCategories(response.data))
    }, []);

    // Load items when the category changes
    useEffect(() => {
        // Save the current category to localStorage
        localStorage.setItem('category', category);

        let url = '';
        if (category === 'all') {
            url = `https://dummyjson.com/products?limit=0`;
        } else {
            url = `https://dummyjson.com/products/category/${category}?limit=0`;
        }

        axios.get(url)
            .then(response => setProducts(response.data.products))
    }, [category]);

    function changeCategory(e) {
        // Update the category state when the user selects a new category
        setCategory(e.currentTarget.value);
    }

    return (
        <div className={styles.ProductsList}>
            <div className="wrapper">

                <div className={styles.filterPanel}>
                    <div className={styles.productsCategories}>
                        <p className={styles.filter__panelHeader}>Categories:</p>
                        <select className={styles.categories__select} onChange={changeCategory} value={category}>
                            <option value="all">All</option>
                            {productCategories.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.search}>
                        <p>Search</p>
                        <input type="text" placeholder="Enter search string"/>
                        <button>Search</button>
                    </div>
                </div>

                <div className={styles.productItems}>
                    {
                        products.length > 0 ? products.map(product => <Product product={product} key={product.id}/>) :
                            <h1>Loading...</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsList;
