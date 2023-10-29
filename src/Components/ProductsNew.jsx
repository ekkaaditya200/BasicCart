import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { add } from '../Store/cartSlice'
import { fetchProductData } from '../Store/productSlice'
import { useSelector } from "react-redux";
import { STATUSES  } from "../Store/productSlice";

const Products = () => {
    const { data: products, status } = useSelector(state => state.product);
    console.log(status);
    // const items = useSelector(state => state.product); //will get the data and status both
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductData());
    }, [])

    const handleAdd = (product) => {
        dispatch(add(product));
    }

    if(status === STATUSES.LOADING)
        return <h2>Loading.....</h2>
    else if(status === STATUSES.ERROR)
        return <h2>Error</h2>

    return (
        <>
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
        </>
    )
}

export default Products
