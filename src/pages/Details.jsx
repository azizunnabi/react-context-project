import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react";
import { AiFillStar,AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { ShopContext } from "../store/ShopProvider";
import Loader from "../components/Loader";
const Details = () => {
    const {state: {loader, product}, fetchProduct} = useContext(ShopContext)
    const {id} = useParams();
    useEffect(() => {
    fetchProduct(id);
    }, [id])
    console.log(product, loader)
  return (
    <div className="max-w-screen-lg mx-auto my-10">
        {loader ? <Loader /> : <div className="flex flex-wrap -mx-6">
            <div className="w-full md:w-6/12 lg:w-4/12 p-6">
                <img src={product?.image} className="w-full h-[300px] object-cover" />
            </div>
            <div className="w-full md:w-6/12 lg:w-8/12 p-6">
              <h4 className="capitalize text-emerald-600 font-medium">{product?.category}</h4>
              <h2 className="text-2xl font-semibold mt-2">{product?.title}</h2>
              <div className="flex items-center space-x-2 my-1">
                <AiFillStar size={20} color="orange" />
                <span>{product?.rating?.rate}</span>
                <span>({product?.rating?.count})</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="uppercase text-emerald-600 text-xl font-medium">rs:</span>
                <span className="text-emerald-600 font-bold text-xl">{product?.price}</span>
              </div>
              <span className="block mb-1.5 capitalize my-1.5 text-lg font-medium">description</span>
              <p className="mt-1 text-gray-700">{product?.description}</p>
              <div className="flex justify-between items-center my-5">
               <div className="w-full md:w-6/12">
               <div className="flex items-center">
                  <span className="flex items-center justify-center bg-emerald-600 text-white w-10 h-10 rounded-full cursor-pointer"><AiOutlineMinus /></span>
                  <span className="flex-1 text-center">4</span>
                  <span className="flex items-center justify-center bg-emerald-600 text-white w-10 h-10 rounded-full cursor-pointer"><AiOutlinePlus /></span>
                </div>
               </div>
                <div>sdf</div>
                <div>
                </div>
              </div>
            </div>
            </div>}
    </div>
  )
}

export default Details