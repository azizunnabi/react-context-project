import { useContext } from "react";
import { ShopContext } from "../store/ShopProvider";
const Home = () => {
    const {data,user} = useContext(ShopContext);
    console.log(data)
  return (
    <div>Home</div>
  )
}

export default Home