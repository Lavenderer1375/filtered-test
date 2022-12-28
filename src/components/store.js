import { configureStore } from "@reduxjs/toolkit";
import  tableSliceReducer  from "./tableSlice";



export default configureStore({
    reducer:{
        table: tableSliceReducer,
        side: tableSliceReducer,
    }
})