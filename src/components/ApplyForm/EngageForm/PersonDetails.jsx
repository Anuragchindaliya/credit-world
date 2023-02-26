import { useForm, useFormContext } from "react-hook-form";
import { useMutation } from "react-query";
import { formInitialState } from ".";
import { registerEngage } from "../../../api";
import FloatInput from "../FloatInput";
import { notify } from "../utils";
const PersonDetails = () => {
  const {
    formData,
    bankId,
    setFormData,
    multiStep: { isFirstStep, isLastStep, back, goto },
  } = useFormContext();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: formData,
  });
  const {
    mutate: addEngage,
    isLoading: isApplying,
    isSuccess,
    reset,
  } = useMutation(registerEngage);
  const { errors } = formState;
  const onSubmit = (formProps) => {
    setFormData(formProps);
    console.log("submit finish", formProps);

    formProps.body = `<div>
    <h1>Credit World</h1>
      <div>Thankyou for applying credit card, representative will connect you shortly. They will suggest you the best credit card that suits you</div>
      <br />
      <div>Thanks and regards</div>
      <div>Web: creditworld.in </div>
      Mail: support@creditworld.in
    </div>`;
    formProps.bankId = bankId;

    addEngage(formProps, {
      // onSuccess: () => {
      //   e.target.reset();
      // },
      onError: (data) => {
        console.log(
          "onError",
          data?.response?.data?.message || "something went wrong"
        );
        notify("error", data?.response?.data?.message);
      },
    });
  };
  const handleReset = () => {
    setFormData(formInitialState);
    reset();
    goto(0);
  };
  return (
    <>
      {isSuccess && (
        <div
          id="successModal"
          tabIndex={-1}
          aria-hidden="true"
          className=" overflow-y-auto bg-black bg-opacity-25 overflow-x-hidden fixed top-0 right-0 left-0 z-[99] justify-center items-center w-full h-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative flex p-4 w-full max-w-md m-auto h-full ">
            {/* Modal content */}
            <div className="relative m-auto p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              {/* <button
                type="button"
                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="successModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button> */}
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Success</span>
              </div>
              <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Successfully Registered.
              </p>
              <button
                data-modal-toggle="successModal"
                type="button"
                className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-900 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
                onClick={handleReset}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
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
              pattern: {
                value: /^[a-zA-Z]{3,}$/i,
                message: "Name is not valid",
              },
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
        {/* <FormSubmit /> */}
        <div className="absolute left-0 bottom-0 w-full flex justify-end gap-2">
          {isFirstStep && (
            <button
              type="button"
              onClick={back}
              className="m-auto d-block max-w-sm w-1/2 text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={isApplying}
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="m-auto  flex justify-center items-center max-w-sm w-1/2 text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            disabled={isApplying}
          >
            {isApplying ? (
              <>
                <div
                  className="spinner-border text-white mx-2"
                  style={{ width: 20, height: 20 }}
                  role="status"
                >
                  <span className="sr-only">Applying...</span>
                </div>{" "}
                Applying...
              </>
            ) : (
              <>{isLastStep ? "Apply Now" : "Next"}</>
            )}
          </button>
        </div>
      </form>
    </>
  );
};
export default PersonDetails;
