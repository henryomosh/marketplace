import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const user = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    // base url of backend API
    baseUrl: "http://127.0.0.1:8000/",
    // prepareHeaders is used to configure the header of every request and gives access to getState which we use to include the token from the store
    prepareHeaders: (headers, { getState }) => {
      if (user) {
        // include token in req header
        headers.set("authorization", `Bearer ${user.access}`);
        return headers;
      }
    }
  }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({
        url: `users/${user.user.id}`,
        method: "GET"
      })
    }),
    // login endpoint
    userLogin: builder.mutation({
      query: ({ email, password }) => ({
        url: "login/",
        method: "POST",
        body: { email, password }
      })
    })
  })
});

// export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserDetailsQuery } = authApi;
