import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { bayutApi } from "./services/bayut";
import { newsCatcherApi } from "./services/newsCatcher";

const store = configureStore({
  reducer: {
    [bayutApi.reducerPath]: bayutApi.reducer,
    [newsCatcherApi.reducerPath]: newsCatcherApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bayutApi.middleware),

  middlewareII: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsCatcherApi.middleware),
});

export default store;
