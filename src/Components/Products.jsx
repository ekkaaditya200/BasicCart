import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import {add} from '../Store/cartSlice'

const Products = () => {

    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
            return true;
        }
        fetchProducts();
    }, [])

    const handleAdd = (product) => {
        dispatch(add(product));
    }

    return (
        <div className="flex flex-wrap">
            {products.map((item) => {
                return <div key={item.id} className="flex justify-center items-center flex-col gap-2 text-center m-8 overflow-hidden w-64 bg-slate-50 pt-2">
                    <img className="h-32 w-32" src={item.image}></img>
                    <h2 className="w-32">{item.title}</h2>
                    <h2 className="w-32">{item.price}</h2>
                    <button onClick={() => handleAdd(item)} className="bg-blue-200 p-2 rounded-md">Add To Cart</button>
                </div>
            })}
        </div>
    )
}

export default Products
