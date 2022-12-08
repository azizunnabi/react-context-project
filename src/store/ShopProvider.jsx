import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext();

const ShopProvider = ({children}) => {
   const [state, setState] = useState({
      products: [],
      product: {},
      loader: true
   });
   const fetchProduct = (id) => {
      setState({...state, loader: true})
      axios.get(`https://fakestoreapi.com/products/${id}`).then(({data}) => {
      setState({...state, loader: false, product: data})
      })
   }
   useEffect(() => {
     axios.get('https://fakestoreapi.com/products').then(({data}) => {
      setState({loader: false, products: data})
     }).catch(err => {
      setState({...state, loader: false});
     })
   }, [])
   return (
    <ShopContext.Provider value={{state,fetchProduct}}>
   {children}
   </ShopContext.Provider>
   )
}
export default ShopProvider