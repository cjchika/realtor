import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false, token: null, user: "" };

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
    setActiveUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setActiveUser } = authSlice.actions;

export default authSlice.reducer;
