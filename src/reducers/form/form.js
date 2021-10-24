import { createReducer } from "@reduxjs/toolkit";
import { serviceTriggerForm } from "../../actions/actions";


const openForm = {
    open: false,
}

const openFormReducer = createReducer(openForm, (builder) => {
    builder
        .addCase(serviceTriggerForm, (state, action) => {
            state.open = action.payload;
        })
});

export default openFormReducer;