import React, { forwardRef } from "react";

const FloatInput = forwardRef(
  ({ name, type, errors, children, ...props }, ref) => {
    return (
      <div className="mb-3">
        <div className="relative ">
          <input
            {...(ref && { ref })}
            // ref={ref}
            {...props}
            type={type}
            id={name}
            className="block p-2 pb-2.5  w-full text-sm text-gray-900 bg-transparent rounded-lg border  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-white"
            placeholder=" "
            name={name}
          />
          <label
            htmlFor={name}
            className="absolute rounded-2xl text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            {children}{" "}
            {props?.required && <span className="text-danger">*</span>}
            {/* Your E-mail <span className="text-danger">*</span> */}
          </label>
          <span className="absolute -bottom-5 text-red-700">{errors?.[name]?.message}</span>
        </div>
      </div>
    );
  }
);

export default FloatInput;
