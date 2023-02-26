import { useForm, useFormContext } from "react-hook-form";
import { FormSubmit } from ".";
import FloatInput from "../FloatInput";
const Mobile = () => {
  const {
    formData,
    setFormData,
    multiStep: { next },
  } = useFormContext();

  const { register, handleSubmit, formState } = useForm({
    // resolver: zodResolver(FormSchema),
    defaultValues: formData,
  });
  const { errors } = formState;
  const onSubmit = (values) => {
    setFormData(values);
    next();
  };
  console.log({ errors });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-8 ">
      <div className="mt-4">
        <FloatInput
          name={"contact"}
          type="number"
          placeholder=""
          // pattern="^\d{10,10}$"
          title="Contact should be of 10 digits"
          onKeyDown={(evt) =>
            ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
          }
          pattern="^[0-9]{10,10}$"
          maxLength={10}
          minLength={10}
          errors={errors}
          {...register("contact", {
            required: "Contact number is required",
            minLength: {
              value: 10,
              message: "Contact number should of 10 digits",
            },
            maxLength: {
              value: 10,
              message: "Contact number should of 10 digits",
            },
          })}
        >
          Your Contact No.
        </FloatInput>
      </div>
      <FormSubmit />
    </form>
  );
};
export default Mobile;
