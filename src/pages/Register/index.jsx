import React from "react";
import { Link } from "react-router-dom";
import ApplyForm from "../../components/ApplyForm";
import CardSlider from "../../components/CardSlider";
import Comparison from "./Camparison";
import Feature from "./Feature";
import ProcessSteps from "./ProcessSteps";

const Register = ({apiService}) => {
  return (
    <>
      <div className="bg-gray ">
        <div className="container py-1">
          <div className="my-2">
            <Link to={"/"}>
              <i className="fa fa-home text-blue-900" />
            </Link>
            <i className="fa fa-chevron-right px-1" />
            <span>HDFC Bank Credit Card</span>
          </div>
          <div className="row flex-col-reverse sm:flex-row ">
            <div className="col-lg-7">
              <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                HDFC Bank Credit Card
              </h1>
              <p className="text-xs text-blue-900">
                Apply online for HDFC Bank Credit Card: Check your HDFC Bank
                Credit Card Eligibility ✓ Offers ✓ Fee charges ✓ Reward Points ✓
                Apply Online instantly at IndiaLends.
              </p>
              <CardSlider bankId={1} />
            </div>
            <div className="col-lg-5 mb-5 ">
              <ApplyForm bankId={1} apiService={apiService} />
            </div>
          </div>
        </div>
      </div>
      <ProcessSteps />
      <Feature />
      <Comparison />
    </>
  );
};

export default Register;
