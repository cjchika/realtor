import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsCatcherApi = createApi({
  reducerPath: "newCatcherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newscatcher.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "b0834bc328msh0d81b6138d53f5ep1bdadejsn4c1a3d09b114"
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getRealEstateNews: builder.query({
      query: () => `/latest_headlines?lang=${"en"}`,
    }),
  }),
});

export const { useGetRealEstateNewsQuery } = newsCatcherApi;
