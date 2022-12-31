import React from "react";
const eligibilityCriteria = [
  {
    title: "Good Credit Score",
    icon: "credit-score.svg",
  },
  {
    title: "Above 21 Years of Age",
    icon: "svgexport-7.svg",
  },
  {
    title: "Self-Employed or Salaried Professional",
    icon: "svgexport-8.svg",
  },
  {
    title: "Resident of India",
    icon: "svgexport-9.svg",
  },
  {
    title: "Valid Bank Account",
    icon: "svgexport-10.svg",
  },
  {
    title: "Aadhar Card , Voter ID / Driving License and PAN Card",
    icon: "svgexport-11.svg",
  },
  {
    title: "Bank Statements for The Last Three Months",
    icon: "svgexport-12.svg",
  },
  {
    title: "Salary Slips for The Last Three Months",
    icon: "svgexport-13.svg",
  },
];
const Feature = () => {
  return (
    <section className="elements-area section-padding-100-0 bg-gray">
      <div className="container">
        <div className="row">
          {/* ========== Web Icons ========== */}
          <div className="col-12">
            <div className="elements-title mb-[3rem] text-center">
              <div className="line m-auto" />
              <h2 className="mt-7 font-medium">Basic Eligibility Criteria</h2>
              <p>
                HDFC Bank has a certain eligibility criteria to be eligible for
                HDFC Credit Card. Individuals who want to apply for a HDFC
                credit card must meet the following eligibility criteria.
              </p>
            </div>
          </div>
          <div className="col-12 mb-70">
            <div className="row">
              {eligibilityCriteria.map((d, i) => {
                return (
                  <div
                    key={i}
                    className="col-12 col-sm-6 col-md-4 col-lg-3 mb-30 text-center text-blue-900  "
                  >
                    <div
                      className=" bg-white shadow-sm  hover:scale-105 transition cursor-pointer shadow-blue-400 flex items-center justify-center  rounded-full m-auto"
                      style={{ width: 100, height: 100 }}
                    >
                      {/* <i className={d?.icon} /> */}
                      <img src={"./assets/img/icons/" + d.icon} />
                    </div>
                    <h1 className="my-2 font-semibold text-base text-gray-600">
                      {d?.title}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
