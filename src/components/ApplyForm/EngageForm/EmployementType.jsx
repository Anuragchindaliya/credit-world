import React from "react";
import { useForm, useFormContext } from "react-hook-form";
import { FormSubmit } from ".";
import FloatInput from "../FloatInput";
import { salaried, selfEmployed } from "./utils";

const EmployementType = () => {
  const {
    formData,
    setFormData,
    multiStep: { next },
  } = useFormContext();

  const { register, watch, handleSubmit, formState } = useForm({
    defaultValues: formData,
  });
  const { errors } = formState;

  const occupation = watch("occupation");
  const isSalaried = occupation === salaried;
  const onSubmit = (values) => {
    setFormData(values);
    next();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        // className="col-lg-12"
      >
        <div className="form-group">
          <div className="mb-1">
            Employment type<span className="text-danger">*</span>
          </div>
          <div className=" w-full flex mb-2 gap-3 md:gap-8">
            <label
              htmlFor="salaried"
              className={`flex-1 flex items-center
                      rounded cursor-pointer
                      text-sm font-medium p-2 justify-center
                    ${
                      occupation === salaried
                        ? "bg-blue-100 text-blue-900 "
                        : "border"
                    }
                    `}
            >
              <input
                type="radio"
                className="mr-2 d-none"
                id={salaried}
                value={salaried}
                required
                {...register("occupation")}
              />
              <div>Salaried</div>
            </label>
            <label
              htmlFor="selfEmployed"
              className={`col-6 flex-1 flex items-center
                      rounded cursor-pointer
                      text-sm font-medium p-2 justify-center
                      ${
                        occupation === selfEmployed
                          ? "bg-blue-100 text-blue-900 "
                          : "border"
                      }
                      `}
            >
              <input
                type="radio"
                className="mr-2 d-none"
                id={selfEmployed}
                value={selfEmployed}
                required
                {...register("occupation")}
              />
              <div>Self Employed</div>
            </label>
          </div>

          {isSalaried ? (
            <div className="form-group">
              <FloatInput
                type="number"
                onKeyDown={(evt) =>
                  ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
                }
                //   required
                errors={errors}
                {...register(
                  "salary",
                  isSalaried && { required: "Salary is required" }
                )}
              >
                Your Net Salary
              </FloatInput>
            </div>
          ) : (
            <div className="form-group">
              <FloatInput
                type="number"
                placeholder="Your Income Tax Return"
                // required
                onKeyDown={(evt) =>
                  ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
                }
                {...register(
                  "ITR",
                  !isSalaried && { required: "ITR is required" }
                )}
                errors={errors}
              >
                Your Income Tax Return
              </FloatInput>
            </div>
          )}
        </div>
        <FormSubmit />
      </form>
    </>
  );
};

export default EmployementType;
