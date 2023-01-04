import { configureStore } from "@reduxjs/toolkit";
import  tableSliceReducer  from "./tableSlice";
import asideSliceReducer from "./asideSlice";


export default configureStore({
    reducer:{
        table: tableSliceReducer,
        side: asideSliceReducer,
    }
})