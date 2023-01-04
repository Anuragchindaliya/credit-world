import React, { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { registerApplicant, registerApplier } from "../../api";
import "./index.css";

const salaried = "salaried";
const selfEmployed = "selfEmployed";
const ApplyForm = ({bankId}) => {
  const notify = () => {
    toast.success(
      <>
        Applied successfull, <br /> We will connect you shortly
      </>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };
  const [occupation, setOccupation] = useState(salaried);
  const [isCardUser, setCardUser] = useState(false);

  const {
    mutate: addSubscriber,
    isLoading: isApplying,
    // isSuccess,
    // reset,
    // data: successRes,
  } = useMutation(registerApplier);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

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
        notify();
        e.target.reset();
      },
    });
  };

  const handleOccupation = (e) => {
    setOccupation(e.target.id);
  };
  const handleCardUser = () => {
    setCardUser((b) => !b);
  };
  return (
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
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <FloatInput name={"name"} type="text" placeholder="" required>
                  Your Name
                </FloatInput>
              </div>
              <div className="col-lg-6">
                <FloatInput
                  name={"contact"}
                  type="number"
                  placeholder=""
                  required
                >
                  Your Contact No.
                </FloatInput>
              </div>
              <div className="col-lg-6">
                <FloatInput name={"email"} type="email" placeholder="" required>
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
                      <FloatInput type="number" name="salary" required>
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
  );
};

const FloatInput = ({ name, type, children, ...props }) => {
  return (
    <div className="relative mb-3">
      <input
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
};
export default ApplyForm;
