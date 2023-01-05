import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { fetchBankData, registerApplier } from "../../api";
import { docTitle } from "../../App";
import ApplyForm from "../../components/ApplyForm";
import CardSlider from "../../components/CardSlider";
import BankLogo from "../../components/common/BankLogo";
import useTitle from "../../hooks/useTitle";
import BankAbout from "./BankAbout";
import CardList from "./CardList";
import "./index.css";

const Bank = () => {
  const { bankname } = useParams();
  useTitle(`${bankname?.toUpperCase()} | ${docTitle}`);
  const { isLoading, data } = useQuery(
    ["bankData", bankname],
    () => fetchBankData(bankname),
    {
      staleTime: 1000 * 60 * 30,
    }
  );
  if (isLoading) {
    return (
      <div className="container py-5 my-5 d-flex justify-content-center align-items-center">
        <h4 className="text-xl flex font-semibold">
          <div className="spinner-border text-primary mx-2" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          {bankname?.toUpperCase()} Loading...
        </h4>
      </div>
    );
  }
  const bankDetails = data?.data?.banks?.[0];
  if (!bankDetails) {
    return (
      <div className="container py-5 my-5" style={{ textAlign: "center" }}>
        <h4>{bankname?.toUpperCase()} Data not found</h4>
      </div>
    );
  }
  const bankId = bankDetails?.id;
  return (
    <>
      <div className="bg-gray ">
        <div className="container py-1">
          <div className="my-2">
            <Link to={"/"}>
              <i className="fa fa-home text-blue-900" />
            </Link>
            <i className="fa fa-chevron-right px-1" />
            <span>{bankDetails?.name} Credit Card</span>
          </div>
          <div className="row flex-col-reverse sm:flex-row ">
            <div className="col-lg-7">
              <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                {bankDetails?.name?.toUpperCase()} Credit Card
              </h1>
              <p className="text-xs text-blue-900">{bankDetails?.content}</p>
              <CardSlider bankId={bankId} />
            </div>
            <div className="col-lg-5 mb-5 ">
              <ApplyForm bankId={bankId} apiService={registerApplier} />
            </div>
          </div>
        </div>
      </div>
      {/* images caps like jumbotron */}
      <BankAbout bankDetails={bankDetails} />
      {/* images caps */}
      {/* card start from here */}
      <CardList bankId={bankId} />
      <BankLogo />
    </>
  );
};

export default Bank;
