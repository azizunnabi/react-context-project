import { createContext, useState } from "react";

export const ShopContext = createContext();

const ShopProvider = ({children}) => {
   const [data, setData] = useState({
    name: 'Rehan', friends: ['aziz', 'shakil']
   })
   const [user, setUser] = useState({
    id: 1,
    name: 'javed'
   })
   return (
    <ShopContext.Provider value={{data, setData, user, setUser}}>
   {children}
   </ShopContext.Provider>
   )
}
export default ShopProvider