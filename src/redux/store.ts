import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "./api/apiSlice";
import { shopApi } from "./features/shop/shopSlice";
import rootReducer from "./reducers";
const store = configureStore({
  // reducer:rootReducer
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, apiSlice.middleware),
});
// / optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;

export default store;
