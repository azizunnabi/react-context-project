import { useContext } from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Product from "../components/Product";
import { ShopContext } from "../store/ShopProvider";
const Home = () => {
    const {state: {products,loader}} = useContext(ShopContext);
    // const {products, loader} = state;   question: are we can use this instead of above
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl w-full my-10 mx-auto border border-dashed border-black">
      {loader ? <Loader /> : <div className="flex flex-wrap border border-dotted border-blue-700 m-2">
        {products.map( product => (
        <Product key={product.id} product={product} />
      ))}
        </div>}
      </div>
    </div>
  )
}

export default Home