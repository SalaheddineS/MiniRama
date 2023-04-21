import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFamousMovies = createAsyncThunk("famous/fetchMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=318ecf5761c926ad8559bb90686c2aef"
  );
  return response;
});

const FamousMoviesSlice = createSlice({
  name: "FamousMovies",
  initialState: {
    data: [],
    status: "null",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFamousMovies.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchFamousMovies.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload.data;
    });
    builder.addCase(fetchFamousMovies.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default FamousMoviesSlice.reducer;
