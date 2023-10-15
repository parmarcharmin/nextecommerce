import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./Reducers/productSlice"
const store = configureStore({
    reducer :{
        product: productSlice
    }
})

export default store