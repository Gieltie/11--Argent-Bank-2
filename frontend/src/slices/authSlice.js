import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  /* token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null, */
  userProfile: localStorage.getItem("userProfile")
    ? JSON.parse(localStorage.getItem("userProfile"))
    : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      /* const userInfoParsed = JSON.parse(localStorage.getItem("userInfo"));
      const token = userInfoParsed.body.token;
      state.token = token; */
    },
    removeCredentials: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
      localStorage.setItem("userProfile", JSON.stringify(action.payload));
    },
  },
});

export const { setCredentials, removeCredentials, setUserProfile } =
  authSlice.actions;

export default authSlice.reducer;
