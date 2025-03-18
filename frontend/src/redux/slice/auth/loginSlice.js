import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";
import store from "../../store";

// initialize user info from local storage
const isAuthenticated = localStorage.getItem("user") ? true : false;
const userInfo = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  loading: false,
  userInfo,
  isAuthenticated,
  error: null,
  success: false
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
    logout: (state) => {
      localStorage.removeItem("user"); // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    reset: (state) => {
      state.error = "";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(state.userInfo));
      state.success = true;
    });

    builder.addCase(userLogin.rejected, (state, action) => {
      if (action.payload.detail) {
        state.error = action.payload.detail;
      }
      state.loading = false;
    });
  }
});

export const { setCredentials, logout, reset } = loginSlice.actions;
export default loginSlice.reducer;
