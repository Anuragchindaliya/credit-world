import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../../utils";
import { RootState } from "../../reducers";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: getCookie("accessToken") },
  // initialState: { token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
    logOut: (state, action) => {
      state.token = null;
    },
  },
});
export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
