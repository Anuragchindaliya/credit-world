import { createSlice } from "@reduxjs/toolkit";
interface initialStateI {
  darkTheme: boolean;
  drawerShow: boolean;
}
const darkTheme = !!localStorage.getItem("dark-theme");
const initialState: initialStateI = {
  darkTheme,
  drawerShow: false,
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const { darkTheme } = state;
      if (darkTheme) {
        localStorage.removeItem("dark-theme");
      } else {
        localStorage.setItem("dark-theme", "_");
      }
      state.darkTheme = !darkTheme;
      return state;
    },
    toggleDrawer: (state) => {
      state.drawerShow = !state.drawerShow;
      return state;
    },
  },
});
export const { toggleTheme,toggleDrawer } = themeSlice.actions;
export default themeSlice.reducer;
