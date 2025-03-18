import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApi = createAsyncThunk("fetchApi", async () => {
  const res = await axios.get(`http://127.0.0.1:8000/users/`);
  console.log(res);
  return res.data;
});

const apiSlice = createSlice({
  name: "apiSlice",
  initialState: {
    isLoading: false,
    data: [],
    isError: false
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log(action.payload);
    });
    builder.addCase(fetchApi.rejected, (state, action) => {
      state.isError = true;
    });
  }
});

export default apiSlice.reducer;
