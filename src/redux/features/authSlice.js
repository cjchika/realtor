import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
    },
    logout(state, action) {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
