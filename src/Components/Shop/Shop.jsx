import ProductsList from "../Products/ProductsList";
import './Shop.scss';
import Footer from "../Footer/Footer";

const Shop = () => {
    return (
        <section className="Shop">
            <ProductsList/>

            <Footer/>
        </section>
  )
}

export default Shop;