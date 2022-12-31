import React from "react";
const steps = [
  {
    title: "Register",
    desc: "Apply for a Credit Card online by filling an easy application form.",
  },
  {
    title: "Select a Credit Card",
    desc: "Choose a Credit Card which best suits your needs and lifestyle.",
  },
  {
    title: "Get Approved Instantly",
    desc: "Receive instant approval on your HDFC Bank Credit Card.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="elements-area section-padding-100-0 bg-white ">
      <div className="container pb-10 px-10">
        <div className="elements-title mb-[4rem] text-center">
          <div className="line m-auto" />
          <h2 className="mt-3 font-medium">Basic Eligibility Criteria</h2>
        </div>
        <div className="row">
          {/* ========== Web Icons ========== */}
          <div className="col-lg-6 p-0 md:p-[30px!important]">
            <img src="./assets/img/icons/how-it-works-img.svg" />
          </div>
          <div className="col-lg-6">
            <ol className="relative  border-l-2 border-blue-200 border-none dark:border-gray-700">
              {steps.map((exp, i, exps) => (
                <li key={i} className="relative pb-10 pl-4">
                  {/* circle */}
                  <div className="absolute -left-[11px] z-10 mt-1.5 h-6 w-6 rounded-full border-4  border-gray-200 bg-blue-300 dark:border-gray-900 dark:bg-gray-700 flex">
                    <div className="bg-gray-100 w-2 h-2 rounded-full m-auto" />
                  </div>
                  {/* line */}
                  {exps.length !== i + 1 && (
                    <div className="absolute left-0 top-2 h-full w-0.5 border-dotted border-l-2 border-blue-200 dark:bg-gray-600" />
                  )}
                  <div className="-translate-y-4">
                    <h1 className="block font-bold   pointer-events-none no-underline tracking-wider text-blue-300 text-6xl">
                      0{i + 1}
                    </h1>
                    <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      {exp.desc}
                    </p>
                  </div>
                </li>
              ))}
              {/* {steps?.map((d, i) => {
                return (
                  <li className="relative b-10 pl-4">
                    <div className="absolute -left-[5px] z-10 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
                    {steps.length !== i + 1 && (
                      <div className="absolute left-0 top-2 h-full w-0.5 bg-gray-300 dark:bg-gray-600" />
                    )}
                    <div className="-translate-y-6">
                      <h1 className="block font-bold   pointer-events-none no-underline tracking-wider text-blue-300 text-6xl">
                        0{i + 1}
                      </h1>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        {d?.title}
                      </h3>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {d?.desc}
                      </p>
                    </div>
                  </li>
                );
              })} */}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
