import { useRef } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { FormSubmit } from ".";
import FloatInput from "../FloatInput";

const Pincode = () => {
  const formRef = useRef(null);
  const {
    formData,
    setFormData,
    multiStep: { next },
  } = useFormContext();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: formData,
  });
  const { errors } = formState;
  const onSubmit = (values) => {
    setFormData(values);
    next();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-8 " ref={formRef}>
      <div className="mt-4">
        <FloatInput
          // {...field}
          name={"pincode"}
          type="number"
          placeholder=""
          maxLength={10}
          minLength={10}
          errors={errors}
          onKeyDown={(evt) =>
            ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
          }
          {...register("pincode", {
            required: "Pincode is required",
            maxLength: { value: 6, message: "Pincode should be of 6 digits" },
            minLength: { value: 6, message: "Pincode should be of 6 digits" },
            // onBlur:(e)=>{
            //   // console.log("blur",formRef?.current.submit(formRef?.current))
            //   formRef?.current.dispatchEvent(new Event("submit"));
            // }
          })}
        >
          Your Area pincode
        </FloatInput>
      </div>
      <FormSubmit />
    </form>
  );
};
export default Pincode;
