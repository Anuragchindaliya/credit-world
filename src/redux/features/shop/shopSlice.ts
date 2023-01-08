import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
interface ShopI {
  title: string;
  imgSrc: string;
  desc: string;
}
interface ShopState {
  shops: ShopI[] | null;
  loading: boolean;
  error: string;
}

const initialState: ShopState = {
  shops: [],
  loading: false,
  error: "",
};

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
export const fetchShop = createAsyncThunk("shop/fetchShops", async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
});
export const getShopData = async () => {
  return await axios.get("https://fakestoreapi.com/products").then((res) => {
    console.log(res.data);
    return res.data;
  });
};
export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  // baseQuery:getShopData,
  tagTypes: ["Shops"],
  endpoints: (builder) => ({
    getAllShop: builder.query<Product[], void>({
      query: () => "products",
    }),
    getSingleShop: builder.query<Product, string>({
      query: (id) => "products/" + id,
    }),
  }),
});
export const { useGetAllShopQuery, useGetSingleShopQuery } = shopApi;

const shopSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    setShop: (state: ShopState, action: PayloadAction<ShopI[]>) => {
      state.shops = action.payload;
    },
  },
  extraReducers: {},
});

export default shopSlice.reducer;
export const { setShop } = shopSlice.actions;
