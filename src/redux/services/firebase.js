import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const firebaseAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://identitytoolkit.googleapis.com/v1/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: "accounts:signUp?key=AIzaSyBbTjfZRxJ_29hJiCrMXCwMplEv5ggEoAI",
        method: "POST",
        body: credentials,
      }),
    }),
    logIn: builder.mutation({
      query: (credentials) => ({
        url: "accounts:signInWithPassword?key=AIzaSyBbTjfZRxJ_29hJiCrMXCwMplEv5ggEoAI",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSignupMutation, useLogInMutation } = firebaseAPI;
