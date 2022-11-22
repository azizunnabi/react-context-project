const Product = ({product}) => {
    const {title,image,price} = product;
  return (
    <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-5">
        <div className="w-full h-[200px] overflow-hidden ">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg hover:scale-[1.2] transition-all duration-700" />
        </div>
        <p className="mt-2 text-lg">{title.slice(0,50)}...</p>
    </div>
  )
}

export default Product