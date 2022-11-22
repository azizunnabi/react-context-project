import { useContext } from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Product from "../components/Product";
import { ShopContext } from "../store/ShopProvider";
const Home = () => {
    const {state: {products,loader}} = useContext(ShopContext);
    // const {products, loader} = state;
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl w-full my-10 mx-auto">
      {loader ? <Loader /> : <div className="flex flex-wrap">
        {products.map( product => (
        <Product key={product.id} product={product} />
      ))}
        </div>}
      </div>
    </div>
  )
}

export default Home