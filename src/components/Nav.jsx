import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <div className="bg-white border-b h-[70px]">
      <div className="max-w-screen-lg w-full mx-auto flex items-center h-[70px]">
       <Link to="/">
        <img src="/logo.svg" />
       </Link>
      </div>
    </div>
  )
}

export default Nav