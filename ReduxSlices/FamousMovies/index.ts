import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("famous/fetchMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/tv/latest?api_key=318ecf5761c926ad8559bb90686c2aef&language=en-US"
  );
  return response;
});

const counterSlice = createSlice({
  name: "FamousMovies",
  initialState: {
    data: [],
    status: "null",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload.data;
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default counterSlice.reducer;
