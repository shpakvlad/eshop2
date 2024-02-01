import styles from './ProductsList.module.scss';
import Product from "./Product/Product";
import {useEffect, useState} from "react";
import axios from "axios";

const ProductsList = () => {
    let [products, setProducts] = useState([]);
    let [category, setCategory] = useState('all');
    let [productCategories, setCategories] = useState([]);
    let [searchInput, setSearchInput] = useState('');

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
        if (category === 'All') {
            url = `https://dummyjson.com/products?limit=0`;
        } else {
            url = `https://dummyjson.com/products/category/${category}?limit=0`;
        }

        axios.get(url)
            .then(response => setProducts(response.data.products))
    }, [category]);

    function changeCategory(e) {
        // Update the category state when the user selects a new category
        setCategory(e.currentTarget.textContent);
    }

    function searchProduct() {

        axios.get('https://dummyjson.com/products/search?q=' + searchInput)
            .then(response => setProducts(response.data.products));
    }

    function handleSetInput(e) {
        setSearchInput(e.currentTarget.value);
    }

    return (
        <div className={styles.ProductsList}>
            <div className={styles.wrapper}>

                <div className={styles.searchPanel}>
                    <input onChange={(value) => handleSetInput(value)} className={styles.searchInput} type="text"/>
                    <button onClick={searchProduct} className={styles.searchButton}>Search</button>
                </div>

                <div className={styles.ProductListContent}>
                    <div className={styles.filterPanel}>
                        <div className={styles.productsCategories}>
                            <p className={styles.filter__panelHeader}>Categories:</p>

                            <nav>
                                <li onClick={changeCategory}>All</li>
                                {productCategories.map((option, index) => (
                                    <li key={index} onClick={changeCategory}>{option}</li>
                                ))}
                            </nav>
                        </div>
                    </div>

                    <div className={styles.productItems}>
                        {
                            products.length > 0 ? products.map(product => <Product product={product}
                                                                                   key={product.id}/>) :
                                <h1>Loading...</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsList;
