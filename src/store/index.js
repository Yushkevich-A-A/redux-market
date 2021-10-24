import { configureStore } from "@reduxjs/toolkit";
import serviceListReducer from "../reducers/goodsList/goodsList";
import openFormReducer from "../reducers/form/form";

const store = configureStore({
    reducer: {
        serviceList: serviceListReducer,
        serviceOpen: openFormReducer,
    }
})

export default store;