import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext();

const ShopProvider = ({children}) => {
   const [state, setState] = useState({
      products: [],
      loader: true
   });
   useEffect(() => {
     axios.get('https://fakestoreapi.com/products').then(({data}) => {
      setState({loader: false, products: data})
     }).catch(err => {
      setState({...state, loader: false});
     })
   }, [])
   return (
    <ShopContext.Provider value={{state}}>
   {children}
   </ShopContext.Provider>
   )
}
export default ShopProvider