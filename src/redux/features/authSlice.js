import { createSlice } from "@reduxjs/toolkit";

const initialUser = localStorage.getItem("user");
const initialToken = localStorage.getItem("token");

const initialState = {
  isAuthenticated: !!initialToken,
  token: initialToken || null,
  user: initialUser || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      if (state.token) {
        localStorage.getItem("token");
        state.isAuthenticated = true;
      }
      state.token = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("token", state.token);
    },
    logout(state, action) {
      state.token = action.payload;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    setActiveUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", state.user);
      state.isAuthenticated = true;
    },
  },
});

export const { login, logout, setActiveUser } = authSlice.actions;

export default authSlice.reducer;
