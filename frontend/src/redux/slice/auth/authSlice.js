import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./authActions";

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null, // for handling errors
  success: false, // for monitoring the registration process.
  emailError: null,
  passwordError: null,
  eEmail: false,
  ePassword: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.emailError = null;
      state.passwordError = null;
      state.eEmail = false;
      state.ePassword = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.emailError = null;
      state.passwordError = null;
      state.eEmail = false;
      state.ePassword = false;

      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.success = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      if (action.payload.email) {
        state.emailError = action.payload.email[0];
        state.eEmail = true;
      }
      if (action.payload.password) {
        state.passwordError = action.payload.password[0];
        state.ePassword = true;
      }
      state.error = true;
      state.loading = false;
    });
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
