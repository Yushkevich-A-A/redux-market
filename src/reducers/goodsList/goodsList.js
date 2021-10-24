import { createReducer } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { serviceAddGoods } from "../../actions/actions";

const goodsList = [];

const serviceListReducer = createReducer(goodsList, (builder) => [
    builder
        .addCase(serviceAddGoods, (store, action) => {
            console.log(action.payload)
            store.push({...action.payload, id: nanoid()})
        })
]);

export default serviceListReducer;