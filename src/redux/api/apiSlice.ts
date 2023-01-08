import {
  // BaseQueryApi,
  createApi,
  // FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
// import {
//   BaseQueryApi,
//   createApi,
//   FetchArgs,
//   fetchBaseQuery,
// } from "@reduxjs/toolkit/dist/query";
import { RootState } from "../reducers";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:5000",
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     // const token = (getState() as RootState).auth.token;
//     // if (token) {
//     // headers.set("authorization", "Bearer ${token}");
//     //   }
//     return headers;
//   },
// });

// const baseQueryWithReauth = async (
//   args: string | FetchArgs,
//   api: BaseQueryApi,
//   extraOptions: {}
// ) => {
//   // console.log(args) // request url, method, body
//   // console.log(api) // signal, dispatch, getState()
//   // console.log(extraOptions) //custom like {shout: true}

//   let result = await baseQuery(args, api, extraOptions);

//   // If you want, handle other status codes, too
//   if (result?.error?.status === 403) {
//     console.log("sending refresh token");
//     debugger;
//     // send refresh token to get new access token
//     const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);

//     if (refreshResult?.data) {
//       // store the new token
//       // api.dispatch(setCredentials({ ...refreshResult.data }));

//       // retry original query with new access token
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       // if (refreshResult?.error?.status === 403) {
//       //   refreshResult.error.data.message = "Your login has expired.";
//       // }
//       return refreshResult;
//     }
//   }

//   return result;
// };
// export const apiSlice = createApi({
//   // baseQuery: baseQueryWithReauth,
//   baseQuery: baseQuery,
//   endpoints: (builder) => ({}),
//   // tagTypes: ["Note", "User"],
// });
export const apiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000",
    baseUrl: "https://credit-world.onrender.com/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  // baseQuery:getShopData,
  // tagTypes: ["Shops"],
  endpoints: (builder) => ({
    // getAllShop: builder.query<Product[], void>({
    //   query: () => "products",
    // }),
    // getSingleShop: builder.query<Product, string>({
    //   query: (id) => "products/" + id,
    // }),
  }),
});
