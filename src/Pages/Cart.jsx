import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";
import Pagination from "../Components/Pagination";
import { useState } from "react";
const Cart = () => {
  const [page, setPage] = useState(1);
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const removeHandler = (productId) => {
    console.log(productId);
    dispatch(remove(productId));
  }
  const handlePage = (page) => {
    setPage(page);
  }
  let cards = 3;
  return (
    <div>
      <h3>Cart</h3>
      <div>
        {items.slice(cards * page - cards, cards * page).map(item => {
          return <div key={item.id} className="flex justify-around items-center  m-8 overflow-hidden bg-slate-50 pt-2">
            <img className="h-32 w-32" src={item.image}></img>
            <h2 className="w-32">{item.title}</h2>
            <h2 className="w-32">{item.price}</h2>
            <button className="w-16 bg-blue-200 p-2 rounded-md">Buy</button>
            <button onClick={() => removeHandler(item.id)} className="bg-blue-200 p-2 rounded-md">Remove</button>
          </div>
        })}
      </div>
      <Pagination products={items} page={page} handlePage={handlePage} cards={cards}></Pagination>
    </div>
  )
}

export default Cart
