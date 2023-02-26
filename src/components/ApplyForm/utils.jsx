import { toast } from "react-toastify";
import { z } from "zod";

export const FormSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  contact: z.string().superRefine((val, ctx) => {
    if (val.length !== 10) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Contact number should be of 10 digits",
        fatal: true,
      });
      return z.NEVER;
    }
  }),
  email: z.string().email(),
  pincode: z.string().superRefine((val, ctx) => {
    if (val.length !== 6) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Pincode should be of 6 digits",
        fatal: true,
      });
      return z.NEVER;
    }
  }),
  salary: z.string({
    required_error: "Salary is required",
    invalid_type_error: "Salary must be a string",
  }).min(1,{ message: "Salary is required" }),
  // occupation:
});
export const notify = (type, msgHtml) => {
  toast?.[type](msgHtml, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
