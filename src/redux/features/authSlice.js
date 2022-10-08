import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout(state, action) {
      state.token = action.payload;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
