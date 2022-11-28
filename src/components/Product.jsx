import { Link } from "react-router-dom";
const Product = ({product}) => {
    const {title,image,price, id} = product;
  return (
    <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-5">
       <Link to={`/product/${id}`}>
        <div className="w-full h-[200px] overflow-hidden ">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg hover:scale-[1.2] transition-all duration-700" />
        </div>
        <p className="mt-2 text-lg">{title.slice(0,50)}...</p>
        </Link>
    </div>
  )
}

export default Product