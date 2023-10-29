import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Navbar = () => {
  //state will give all slice so we have to subscribe a cart slice to use
  const items = useSelector((state) => state.cart);
  return (
    <div className="bg-red-200 flex justify-around text-[1.4rem]">
      <span>LOGO</span>
      <div className="flex justify-between gap-10">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <span>
        Cart Item : {items.length}
      </span>
    </div>
  )
}

export default Navbar
