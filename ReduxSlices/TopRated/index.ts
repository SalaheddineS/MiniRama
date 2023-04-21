import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTopRated = createAsyncThunk("top/fetchMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=318ecf5761c926ad8559bb90686c2aef"
  );
  
  return response;
});

const TopRatedSlice = createSlice({
  name: "TopRated",
  initialState: {
    data: [],
    status: "null",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopRated.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTopRated.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload.data;
    });
    builder.addCase(fetchTopRated.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default TopRatedSlice.reducer;
