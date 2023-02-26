import React, { useState } from "react";
import { FormProvider, useFormContext } from "react-hook-form";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import EmployementType from "./EmployementType";
import Mobile from "./Mobile";
import PersonDetails from "./PersonDetails";
import Pincode from "./Pincode";
import { salaried } from "./utils";
export const formInitialState = {
  name: "",
  email: "",
  pincode: "",
  contact: "",
  occupation: salaried,
  salary: "",
  ITR: "",
};
const EngageForm = ({ bankId }) => {
  const [formData, setFormData] = useState(formInitialState);
  const multiStep = useMultiStepForm([
    <EmployementType />,
    <Pincode />,
    <Mobile />,
    <PersonDetails />,
  ]);
  const { step } = multiStep;
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-12 px-4 mx-auto max-w-3xl lg:py-16">
          {/* <h2 className="text-2xl font-bold">Step 1</h2> */}
          <div className="flex justify-between ">
            <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Find the best Credit Card for you
            </h1>
            {/* <div className="font-bold">Step {currentStepIndex + 1}</div> */}
          </div>
          <FormProvider
            formData={formData}
            setFormData={setFormData}
            bankId={bankId}
            multiStep={multiStep}
          >
            <div
              className="relative"
              // className="max-w-lg mx-auto"
            >
              <div className="w-full h-[60vh] flex flex-col">{step}</div>
            </div>
          </FormProvider>
        </div>
      </section>
    </>
  );
};
const TimeLine = () => {
  return (
    <div className="flex justify-center">
      <ol className="flex items-center w-full mb-4 sm:mb-5">
        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path
                fillRule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
        <li className="flex items-center w-full">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ol>
    </div>
  );
};

export const FormSubmit = () => {
  const { multiStep } = useFormContext();
  const { isLastStep, isFirstStep, back } = multiStep;
  return (
    <div className="absolute left-0 bottom-0 w-full flex justify-end gap-2">
      {isFirstStep && (
        <button
          type="button"
          onClick={back}
          className="m-auto d-block max-w-sm w-full text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Previous
        </button>
      )}
      <button
        type="submit"
        className="m-auto d-block max-w-sm w-full text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isLastStep ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default EngageForm;
