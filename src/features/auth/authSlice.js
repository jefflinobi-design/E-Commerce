import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    login: (state) => {
      state.isLoggedIn = true;
    },

    logout: (state) => {
      state.isLoggedIn = false;

      // 🔥 CLEAR LOCAL STORAGE ALSO
      localStorage.removeItem("cart");
    },

  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;