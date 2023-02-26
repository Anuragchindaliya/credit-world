import { useForm, useFormContext } from "react-hook-form";
import { FormSubmit } from ".";
import FloatInput from "../FloatInput";

const PersonDetails = () => {
  const { formData } = useFormContext();

  const { register, handleSubmit, formState } = useForm({
    // resolver: zodResolver(FormSchema),
    defaultValues: formData,
    // mode: "all",
  });
  const { errors } = formState;
  console.log({ errors });
  const onSubmit = (values) => {
    console.log("submit finish", values);
    // setFormData(values);
    // next();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-8 ">
      <div className="mt-4">
        <FloatInput
          name={"name"}
          type="text"
          placeholder=""
          // required
          errors={errors}
          {...register("name", {
            required: "Name is required",
            pattern: { value: /^[a-zA-Z]{3,}$/i, message: "Name is not valid" },
          })}
        >
          Your Name
        </FloatInput>
      </div>
      <div className="mt-4">
        <FloatInput
          type="email"
          placeholder=""
          errors={errors}
          // required
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Email is not valid" },
          })}
        >
          Your E-mail
        </FloatInput>
      </div>
      <FormSubmit />
    </form>
  );
};
export default PersonDetails;
