import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchBankData } from "../../api";
import { docTitle } from "../../App";
import BankLogo from "../../components/common/BankLogo";
import useTitle from "../../hooks/useTitle";
import BankAbout from "./BankAbout";
import CardList from "./CardList";
import "./index.css";
const data = {
  bankname: "Hdfc Bank",
  title: "HDFC BANK CREDIT CARDS",
  desc: "In July 2004, HDFC Bank became the first bank in the county to offer credit cards in over 100 cities. Initially, the Credit Card was launched in over 40 cities. In the beginning, the credit cards were issued under three categories namely the HDFC Bank international silver credit card; international Gold credit card and the Health Plus International Credit Card. The Health Plus International Credit Card was the first credit card in India with a special feature of free inbuilt cashless mediclaim.",
  img: "img/HDFC_logo.png",
  cards: [
    {
      title: "HDFC BANK BUSINESS MONEY BACK CREDIT CARD",
      rewards: [
        "Get 2 reward points for every ₹150 you spend.",
        "Get 4 reward points for every Rs 150 you spend online.",
        "Get twice as many reward points for shopping online.",
      ],
      img: "card/hdfc card/business_moneyback.webp",
      reqDocs: [
        "Income proof or salary slips for the last 3 months",
        "Form 16/IT return",
        "Address proof- Utility bills, Passport, Ration card.",
        "Bank Details",
        "Identity proof such as Aadhar Card, PAN card, Voter Id Card, Driving license.",
        "Passport size photographs",
      ],
      insurace: [
        "Get Rs 1 crore insurance cover in case of air accident.",
        "Get up to Rs 25 lakh insurance cover for emergency medical expenses",
        "Get up to Rs 9 lakh insurance cover for credit card liability",
        "Get up to Rs 50,000 insurance cover in case baggage delay",
        "This insurance cover is for primary cardholders only.",
        "Air insurance cover will be enabled if the tickets are booked from Hdfc Bank diners club premium credit card.",
        "Spend Rs 3 lakh per annum and get your renewal fee waived for next renewal year.",
      ],
      features: [
        "Spend Rs 50,000 in a Quarter and get Rs 500 worth E-Voucher.",
        "Accumulate and redeem your reward points for cashback against outstanding amount on your Credit Card (100 points = ₹ 20).",
        "Enjoy savings of up to Rs 250 every billing cycle with a 100% fuel surcharge waiver.",
        "Redeem points for exclusive gifts and air miles through our exclusive MyRewards catalog.",
        "Renew your membership for free by spending ₹. 50,000 in a year prior to the renewal date.",
        "Now stay in touch with your business moneyback Credit Card because this card includes 24*7 helpline service.",
      ],
    },
    {
      title: "HDFC BANK JET PRIVILEGE CREDIT CARD",
      rewards: [
        "Earn 2 InterMiles on every Rs. 150 spent on retail expenses.",
        "Earn 4 InterMiles on every Rs 150 spent on every flight ticket booked on www.intermiles.com.",
        "Reward points are valid only for a period of 3 years from the date of accumulation.",
      ],
      img: "card/hdfc card/business_moneyback.webp",
      reqDocs: [
        "Income proof or salary slips for the last 3 months",
        "Form 16/IT return",
        "Address proof- Utility bills, Passport, Ration card.",
        "Bank Details",
        "Identity proof such as Aadhar Card, PAN card, Voter Id Card, Driving license.",
        "Passport size photographs",
      ],
      insurace: [
        "Get Rs 1 crore insurance cover in case of air accident.",
        "Get up to Rs 25 lakh insurance cover for emergency medical expenses",
        "Get up to Rs 9 lakh insurance cover for credit card liability",
        "Get up to Rs 50,000 insurance cover in case baggage delay",
        "This insurance cover is for primary cardholders only.",
        "Air insurance cover will be enabled if the tickets are booked from Hdfc Bank diners club premium credit card.",
        "Spend Rs 3 lakh per annum and get your renewal fee waived for next renewal year.",
      ],
      features: [
        "Spend Rs 50,000 in a Quarter and get Rs 500 worth E-Voucher.",
        "Accumulate and redeem your reward points for cashback against outstanding amount on your Credit Card (100 points = ₹ 20).",
        "Enjoy savings of up to Rs 250 every billing cycle with a 100% fuel surcharge waiver.",
        "Redeem points for exclusive gifts and air miles through our exclusive MyRewards catalog.",
        "Renew your membership for free by spending ₹. 50,000 in a year prior to the renewal date.",
        "Now stay in touch with your business moneyback Credit Card because this card includes 24*7 helpline service.",
      ],
    },
  ],
};

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
        <h4>
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
  return (
    <>
      {/* images caps like jumbotron */}
      <BankAbout bankDetails={bankDetails} />
      {/* images caps */}
      {/* card start from here */}
      <CardList bankId={bankDetails?.id} />
      <BankLogo />
    </>
  );
};

export default Bank;
