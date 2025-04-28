import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { Container } from "react-bootstrap";
import ShopList from "../components/ShopList";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Product = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(
    products.filter((item) => parseInt(item.id) === parseInt(id))[0]
  );
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const currentProduct = products.filter((item) => parseInt(item.id) === parseInt(id))[0];
    setSelectedProduct(currentProduct);
    
    if (currentProduct) {
      setRelatedProducts(
        products
          .filter(
            (item) =>
              item.category === currentProduct.category &&
              item.id !== currentProduct.id
          )
          .slice(0, 3) // Limit to 3 products
      );
    }
  }, [id]);

  useWindowScrollToTop();

  return (
    <Fragment>
      <Banner title={selectedProduct?.productName} />
      <ProductDetails selectedProduct={selectedProduct} />
      <ProductReviews selectedProduct={selectedProduct} />
      <section className="related-products">
        <Container>
          <h3>You might also like</h3>
        </Container>
        <ShopList productItems={relatedProducts} />
      </section>
    </Fragment>
  );
};

export default Product;