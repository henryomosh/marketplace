import ProductDetails from "../components/ProductDetails";
import NavBar from "../components/NavBar";
import SimilarProducts from "../components/SimilarProducts";
import Footer from "../components/Footer";

const ProductView = () => {
  return (
    <div>
      <NavBar />
      <ProductDetails />
      <SimilarProducts />
      <Footer />
    </div>
  );
};
export default ProductView;
