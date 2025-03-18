import { createSlice } from "@reduxjs/toolkit";
import { setPassword } from "./authActions";

const initialState = {
  loading: false,
  error: null,
  success: false
};

const setPasswordSlice = createSlice({
  name: "setPassword",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setPassword.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(setPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      console.log(action.payload);
    });
    builder.addCase(setPassword.rejected, (state, action) => {
      if (action.payload.password) {
        state.error = action.payload.password[0];
      }
      state.loading = false;
      console.log(action.payload);
    });
  }
});

export default setPasswordSlice.reducer;
