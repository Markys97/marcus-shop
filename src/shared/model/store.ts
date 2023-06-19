import { configureStore } from "@reduxjs/toolkit";
import {productSlice} from './slices/productSlice'
import {settingSlice} from './slices/settingSlice'

export const store = configureStore({
    reducer:{
        product:productSlice.reducer,
        setting:settingSlice.reducer
        
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch