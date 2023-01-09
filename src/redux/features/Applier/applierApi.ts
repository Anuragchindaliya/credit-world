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
    getSubscribers: builder.query<Subscribers[], void>({
      query: () => "subs",
    }),
    exportSubsCSV: builder.mutation<Text, void>({
      query: () => ({
        url: "subs/export",
        headers: {
          "Content-Type": "text/csv",
        },
        cache: "no-cache",
        responseHandler: (response: { text: () => any }) => response.text(),
        // responseHandler: async (response) => {
        //   console.log("responseHandler", response);
        //   window.location.assign(
        //     window.URL.createObjectURL(await response.blob())
        //   );
        // },
      }),
      // queryFn: async (_, api, extraOptions, baseQuery) => {
      //   const result = await baseQuery({
      //     url: `subs/export`,
      //     responseHandler: (response) => response.blob(),
      //   });
      //   var hiddenElement = document.createElement("a");
      //   var url = window.URL || window.webkitURL;
      //   var blobPDF = url.createObjectURL((result as any).data);
      //   hiddenElement.href = blobPDF;
      //   hiddenElement.target = "_blank";
      //   hiddenElement.download = `${Date.now()}_report.csv`;
      //   hiddenElement.click();
      //   return { data: null };
      // },
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

export const {
  useAppliersQuery,
  useGetSubscribersQuery,
  useExportSubsCSVMutation,
} = authApiSlice;
