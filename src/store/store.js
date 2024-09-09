import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../store/storeSlices.js'


export const store = configureStore({

    reducer : {

        app: appReducer
    }
})
