import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const  fetchLatestMovies = createAsyncThunk("latest/fetchMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=318ecf5761c926ad8559bb90686c2aef"
  );
  
  return response;
});

const LatestMoviesSlice = createSlice({
  name: "LatestMovies",
  initialState: {
    data: [],
    status: "null",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLatestMovies.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchLatestMovies.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload.data;
    });
    builder.addCase(fetchLatestMovies.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default LatestMoviesSlice.reducer;
