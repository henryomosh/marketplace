import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://127.0.0.1:8000/";

export const registerUser = createAsyncThunk(
  "register",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      await axios.post(`${backendURL}register/`, { email, password }, config);
    } catch (error) {
      // return custom error message from backend if present
      if (error.response.data) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const { data } = await axios.post(
        `${backendURL}login/`,
        { email, password },
        config
      );
      // store user's token in local storage
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response.data) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const passwordReset = createAsyncThunk(
  "password",
  async ({ email }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const { data } = await axios.post(
        `${backendURL}passwordreset/`,
        { email },
        config
      );
      console.log(data);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response.data) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const setPassword = createAsyncThunk(
  "setPassword",
  async ({ password, token }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const { data } = await axios.post(
        `${backendURL}passwordreset/confirm/`,
        { password, token },
        config
      );
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response.data) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);
