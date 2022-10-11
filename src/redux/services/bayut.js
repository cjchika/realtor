import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bayutApi = createApi({
  reducerPath: "bayutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bayut.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "bd9812d039mshaf648f73f6fe561p1d9206jsnc85ea1d15d4e"
        //Old key "b0834bc328msh0d81b6138d53f5ep1bdadejsn4c1a3d09b114"
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getProperyList: builder.query({
      query: () => `/properties/list/?locationExternalIDs=${(5002, 6020)}`,
    }),
    getProperyDetails: builder.query({
      query: (id) => `/properties/detail?externalID=${id}`,
    }),
    getAgencyList: builder.query({
      query: (phrase) => `/agencies/list?query=${phrase}`,
    }),
  }),
});

export const {
  useGetProperyListQuery,
  useGetProperyDetailsQuery,
  useGetAgencyListQuery,
} = bayutApi;
