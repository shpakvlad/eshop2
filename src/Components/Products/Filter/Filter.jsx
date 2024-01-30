import styles from  './Filter.module.scss';
import {useEffect, useState} from "react";
import axios from "axios";

const Filter = () => {
    let [productCategories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then(response => setCategories(response.data))
    }, []);

    function changeCategory(e) {
        axios.get(`https://dummyjson.com/products/category/${e.currentTarget.value}`)
            .then(response => console.log(response.data.products)
            )
    }

    return (
        <div>
            <div className="wrapper">
                <div className={styles.filterPanel}>

                    <select className={styles.productCategories} onChange={changeCategory}>
                        <option value="all">All</option>
                        {productCategories.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter;