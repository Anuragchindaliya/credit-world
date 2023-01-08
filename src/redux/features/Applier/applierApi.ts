// import { apiSlice } from "../../app/api/apiSlice";
// import { logOut, setCredentials } from "./authSlice";

import { apiSlice } from "../../api/apiSlice";
export interface Applier {
  id: number;
  bankId: number;
  name: string;
  contact: string;
  email: string;
  pincode: string;
  cardUser: number;
  salary: string;
  ITR: any;
  createdAt: string;
  bankName: string;
}

export interface Subscribers {
  subId: number;
  name: string;
  salary: string;
  itr: any;
  cardUser: number;
  crLimitMin: any;
  crLimitMax: any;
  contact: string;
  email: string;
  subject: any;
  body: any;
  message: any;
  pincode: string;
  cardId: number;
  createdAt: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    appliers: builder.query<Applier[], void>({
      query: () => "applier",
    }),
    getSubscribers: builder.query<Applier[], void>({
      query: () => "subs",
    }),
    // appliers: builder.mutation({
    //   query: (credentials) => ({
    //     url: "/auth",
    //     method: "POST",
    //     body: { ...credentials },
    //   }),
    // }),
  }),
});

export const { useAppliersQuery, useGetSubscribersQuery } = authApiSlice;
