import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { bayutApi } from "./services/bayut";

const store = configureStore({
  reducer: { [bayutApi.reducerPath]: bayutApi.reducer, auth: authReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bayutApi.middleware),
});

export default store;
