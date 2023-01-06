import React, { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./index.css";

const FormSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  contact: z.number().superRefine((val, ctx) => {
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
  pincode: z.number().superRefine((val, ctx) => {
    if (val.length !== 6) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Pincode should be of 6 digits",
        fatal: true,
      });
      return z.NEVER;
    }
  }),
  // occupation:
});

const salaried = "salaried";
const selfEmployed = "selfEmployed";
const ApplyForm = ({ bankId, apiService }) => {
  const {
    register,
    // watch,
    // handleSubmit: handleFormSubmit,
    // formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const notify = (type, msgHtml) => {
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
  const [occupation, setOccupation] = useState(salaried);
  const [isCardUser, setCardUser] = useState(false);
  const [contactNumber, setContactNumber] = useState("");

  const {
    mutate: addSubscriber,
    isLoading: isApplying,
    isSuccess,
    reset,
    // data: successRes,
  } = useMutation(apiService);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    if (formProps.contact.length !== 10) {
      notify("error", "Contact Number should be of 10 digits");
      return;
    }

    formProps.body = `<div>
    <h1>Credit World</h1>
      <div>Thankyou for applying credit card, representative will connect you shortly. They will suggest you the best credit card that suits you</div>
      <br />
      <div>Thanks and regards</div>
      <div>Web: creditworld.in </div>
      Mail: support@creditworld.in
    </div>`;
    formProps.bankId = bankId;

    // formProps.body = `<div><h1>Credit World</h1><p>Thanks for applying</p><div>Name: ${
    //   formProps?.name
    // }</div><div>Sender Mail: ${formProps?.email}</div><div>Contact: ${
    //   formProps?.contact
    // }</div><div>pincode: ${formProps?.pincode}</div><div>Credit card User: ${
    //   formProps?.cardUser ? "YES" : "NO"
    // }</div></div>`;
    // console.log({ formData, formProps });
    // return;
    addSubscriber(formProps, {
      onSuccess: () => {
        e.target.reset();
        setContactNumber("");
      },
      onError: (data) => {
        console.log(
          "onError",
          data?.response?.data?.message || "something went wrong"
        );
        notify("error", data?.response?.data?.message);
      },
    });
  };
  // const onSubmit = async (data) => {
  //   console.log("data", { data });
  // await new Promise(async (resolve) => {
  //   await setTimeout(() => {
  //     console.log(data);
  //     resolve(undefined);
  //   }, 3000);
  // });
  // };

  const handleOccupation = (e) => {
    setOccupation(e.target.id);
  };
  const handleCardUser = () => {
    setCardUser((b) => !b);
  };
  const handleContactNumber = (e) => {
    const { value } = e.target;
    console.log("handleContactNumber", value);
    if (!isNaN(value) && value.length <= 10) {
      setContactNumber(value);
    }
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
                onClick={reset}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        className="container bg-white p-4 rounded "
        style={{ boxShadow: "5px 5px 5px #dce0ff" }}
      >
        {/* <h1>response</h1>
        <div dangerouslySetInnerHTML={{__html:data?.data?.bodyHtml}}></div> */}
        <div className="row">
          <div className="col-12">
            <h1 className="text-2xl font-bold">Get your card now</h1>
            <p className="mb-3">We need this information to connect with you</p>
            <form
              // onSubmit={(e)=>{
              //   e.preventDefault()
              //   handleSubmit(onSubmit)
              //   console.log("submit",{errors})
              // }}
              // onSubmit={(e) => {
              //   e.preventDefault();
              //   console.log(e);
              // }}
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-lg-6">
                  <FloatInput
                    {...register("name")}
                    name={"name"}
                    type="text"
                    placeholder=""
                    required
                  >
                    Your Name
                  </FloatInput>
                </div>
                <div className="col-lg-6">
                  <FloatInput
                    {...register("contact")}
                    name={"contact"}
                    type="number"
                    placeholder=""
                    // pattern="^\d{10,10}$"
                    title="Contact should be of 10 digits"
                    onKeyDown={(evt) =>
                      ["e", "E", "+", "-"].includes(evt.key) &&
                      evt.preventDefault()
                    }
                    onChange={handleContactNumber}
                    value={contactNumber}
                    pattern="^[0-9]{10,10}$"
                    maxLength={10}
                    minLength={10}
                    required
                  >
                    Your Contact No.
                  </FloatInput>
                </div>
                <div className="col-lg-6">
                  <FloatInput
                    name={"email"}
                    type="email"
                    placeholder=""
                    required
                    {...register("email")}
                  >
                    Your E-mail
                  </FloatInput>
                </div>
                <div className="col-lg-6">
                  <FloatInput
                    name={"pincode"}
                    type="number"
                    placeholder=""
                    maxLength={10}
                    minLength={10}
                    onKeyDown={(evt) =>
                      ["e", "E", "+", "-"].includes(evt.key) &&
                      evt.preventDefault()
                    }
                    {...register("pincode")}
                  >
                    Your Area pincode
                  </FloatInput>
                </div>
                <div className="col-lg-12">
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
                          name="occupation"
                          id={salaried}
                          onChange={handleOccupation}
                          checked={occupation === salaried}
                          required
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
                          name="occupation"
                          id={selfEmployed}
                          onChange={handleOccupation}
                          checked={occupation === selfEmployed}
                          required
                        />
                        <div>Self Employed</div>
                      </label>
                    </div>

                    {occupation === salaried ? (
                      <div className="form-group">
                        <FloatInput
                          type="number"
                          name="salary"
                          onKeyDown={(evt) =>
                            ["e", "E", "+", "-"].includes(evt.key) &&
                            evt.preventDefault()
                          }
                          required
                        >
                          Your Net Salary
                        </FloatInput>
                      </div>
                    ) : (
                      <div className="form-group">
                        <FloatInput
                          type="number"
                          name="ITR"
                          placeholder="Your Income Tax Return"
                          required
                          onKeyDown={(evt) =>
                            ["e", "E", "+", "-"].includes(evt.key) &&
                            evt.preventDefault()
                          }
                        >
                          Your Income Tax Return
                        </FloatInput>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className=" form-group">
                    <div className="mb-1">
                      Are you credit card user
                      <span className="text-danger">*</span>
                    </div>
                    <div className="flex gap-3">
                      <label
                        htmlFor="cardYes"
                        className={` flex-1 flex items-center
                       rounded cursor-pointer
                       text-sm font-medium
                       ${isCardUser ? "bg-blue-100 text-blue-900 " : "border"}
                       `}
                      >
                        <input
                          type="radio"
                          name="cardUser"
                          id={"cardYes"}
                          onChange={handleCardUser}
                          checked={isCardUser}
                          value="1"
                          required
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600 d-none"
                        />
                        <div className=" cursor-pointer py-2 mx-2 w-full text-center ">
                          YES
                        </div>
                      </label>
                      {/* <div className="col-lg-1"></div> */}
                      <label
                        htmlFor="cardNo"
                        className={`cursor-pointer  flex-1  flex items-center pl-3 rounded border border-gray-200 dark:border-gray-700
                      ${!isCardUser ? "bg-blue-100 text-blue-900 " : "border"}
                      `}
                      >
                        <input
                          type="radio"
                          name="cardUser"
                          id={"cardNo"}
                          value="0"
                          onChange={handleCardUser}
                          checked={!isCardUser}
                          required
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600 d-none"
                        />
                        <div className="py-2 mx-2 w-full text-center">NO</div>
                      </label>
                    </div>
                    {/* <div className="row">
                    <div className="col-3 ">
                      <input
                      className="mr-2"
                        type="radio"
                        name="cardUser"
                        id={"cardYes"}
                        onChange={handleCardUser}
                        checked={isCardUser}
                        value="1"
                        required
                      />
                      <label htmlFor="cardYes">Yes</label>
                    </div>
                    <div className="col-3">
                      <input
                      className="mr-2"
                        type="radio"
                        name="cardUser"
                        id={"cardNo"}
                        value="0"
                        onChange={handleCardUser}
                        checked={!isCardUser}
                        required
                      />
                      <label htmlFor="cardNo">No</label>
                    </div>
                  </div> */}
                  </div>
                </div>
                <div className="col-12 d-flex " style={{ gap: "1rem" }}>
                  <button
                    className="w-full btn credit-btn  d-flex align-items-center justify-content-center bg-red-700"
                    type="submit"
                    disabled={isApplying}
                  >
                    {isApplying ? (
                      <>
                        <div
                          className="spinner-border text-white mx-2"
                          role="status"
                        >
                          <span className="sr-only">Applying...</span>
                        </div>{" "}
                        Applying...
                      </>
                    ) : (
                      <>Apply now</>
                    )}
                  </button>
                  {/* success msg */}
                  {/* {isSuccess && successRes?.data?.messageRes && (
                  <div
                    className="alert alert-success font-weight-bolder"
                    role="alert"
                  >
                    <i className="fa-solid fa-circle-check mr-2 " />{" "}
                    {successRes?.data?.messageRes}
                    <button
                      type="button"
                      className="close px-1"
                      data-dismiss="alert"
                      aria-label="Close"
                      onClick={reset}
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                )} */}
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <BankLogo /> */}
      </div>
    </>
  );
};

const FloatInput = forwardRef(({ name, type, children, ...props }, ref) => {
  return (
    <div className="relative mb-3">
      <input
        {...(ref && { ref })}
        // ref={ref}
        {...props}
        type={type}
        id={name}
        className=" block  border p-2 pb-2.5  w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-white"
        placeholder=" "
        name={name}
      />
      <label
        htmlFor={name}
        className="absolute rounded-2xl text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {children} {props?.required && <span className="text-danger">*</span>}
        {/* Your E-mail <span className="text-danger">*</span> */}
      </label>
    </div>
  );
});
export default ApplyForm;
