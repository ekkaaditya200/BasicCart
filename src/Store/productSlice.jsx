import { createSlice } from "@reduxjs/toolkit";

//Read only status - enum
export const STATUSES = Object.freeze({
    IDLE: 'idel',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        setProduct(state, action) {
            //! Don't fetch data here Never because reducers are synchronusly called and there are pure function should not have any side effect but fetch has a side effect
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
})

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

//Thunks
export const fetchProductData = () => {
    return async function fetchProductThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProduct(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}