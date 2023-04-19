import { configureStore } from "@reduxjs/toolkit";
import FamousMovies from "../ReduxSlices/FamousMovies";
export default configureStore({
    reducer:{
        Famous: FamousMovies,
    }
})