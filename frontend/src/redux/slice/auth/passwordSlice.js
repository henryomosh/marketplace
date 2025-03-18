import { createSlice } from "@reduxjs/toolkit";
import { passwordReset } from "./authActions";

const initialState = {
  loading: false,
  error: null,
  success: false
};

const passwordSlice = createSlice({
  name: "password",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(passwordReset.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(passwordReset.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      console.log(action.payload);
    });
    builder.addCase(passwordReset.rejected, (state, action) => {
      state.error = action.payload.email[0];
      state.loading = false;
    });
  }
});

export default passwordSlice.reducer;
