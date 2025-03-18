import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./slice/apiSlice";
import authReducer from "./slice/auth/authSlice";
import loginReducer from "./slice/auth/loginSlice";
import passwordReducer from "./slice/auth/passwordSlice";
import setPasswordReducer from "./slice/auth/setPasswordSlice";
import userReducer from "./slice/auth/userSlice";
import { authApi } from "./slice/auth/authService";

const store = configureStore({
  reducer: {
    api: apiReducer,
    auth: authReducer,
    login: loginReducer,
    password: passwordReducer,
    setPassword: setPasswordReducer,
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware)
});
export default store;
