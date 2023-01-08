import { combineReducers } from "@reduxjs/toolkit";
import { authApiSlice } from "./features/auth/authApi";
import authSlice from "./features/auth/authSlice";
import { shopApi } from "./features/shop/shopSlice";
import themeReducer from "./features/theme/themeSlice";
const rootReducer = combineReducers({
  shop: () => {
    return {};
  },
  appTheme: themeReducer,
  auth: authSlice,
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [shopApi.reducerPath]: shopApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
