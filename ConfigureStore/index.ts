import { configureStore } from "@reduxjs/toolkit";
import FamousMovies from "../ReduxSlices/FamousMovies";
import LatestReleases from "../ReduxSlices/LatestReleases";
import TopRated from "../ReduxSlices/TopRated";
export default configureStore({
    reducer:{
        Famous: FamousMovies,
        Latest: LatestReleases,
        TopRated: TopRated
    }
})