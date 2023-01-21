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
export interface Applicant {
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
    applicants: builder.query<Applicant[], void>({
      query: () => "applicants",
    }),
    exportApplicantCSV: builder.mutation<Text, void>({
      query: () => ({
        url: "applicants/export?bankId=1",
        headers: {
          "Content-Type": "text/csv",
        },
        cache: "no-cache",
      }),
    }),
  }),
});

export const {
  useAppliersQuery,
  useGetSubscribersQuery,
  useExportApplicantCSVMutation,
  useApplicantsQuery
} = authApiSlice;
