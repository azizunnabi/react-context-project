import { useContext } from "react"
import { ShopContext } from "../store/ShopProvider"
const Test = () => {
    const {user} = useContext(ShopContext)
    console.log('user:', user)
  return (
    <div>Test</div>
  )
}

export default Test