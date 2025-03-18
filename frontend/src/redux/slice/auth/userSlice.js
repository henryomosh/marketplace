import { createSlice } from "@reduxjs/toolkit";

// initialize userToken from local storage
const userInfo = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const isAuthenticated = userInfo ? true : false;

const initialState = {
  loading: false,
  userInfo,
  isAuthenticated,
  error: null,
  success: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      console.log(userInfo); // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.isAuthenticated = false;
      state.error = null;
    }
  }
});
// export actions
export const { logout } = userSlice.actions;
export default userSlice.reducer;
