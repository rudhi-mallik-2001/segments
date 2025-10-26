import { configureStore } from "@reduxjs/toolkit";
import { segmentSlice } from "./slices/segmentSlice";

export const store =configureStore({
    reducer:{
        segments:segmentSlice
    }
})