import React from "react";
import { useParams } from "react-router-dom";
import { docTitle } from "../../App";
import useTitle from "../../hooks/useTitle";
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

const Bank = ({title}) => {
  const { bankname } = useParams();
  useTitle(`${bankname?.toUpperCase()} ${title} | ${docTitle}`);
  console.log(bankname);
  
  return (
    <>
      {/* images caps like jumbotron */}
      <div className="container mt-5">
        <div className="card mb-3 text-center border-0">
          <img
            className="card-img-top center"
            src={data?.img}
            alt="Card image"
            style={{ width: "100%", margin: "auto" }}
          />
          <div className="card-body p-4">
            <h5 className="card-title">{data?.title}</h5>
            <p className="card-text text-justify" style={{ color: "#000" }}>
              {data?.desc}
            </p>
            {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
          </div>
        </div>
      </div>
      {/* images caps */}
      {/* card start from here */}
      <section>
        <div className="container all-cards mb-70">
          {/* first card start from here*/}
          {data?.cards?.map((card, ci) => {
            return (
              <div key={ci} className="card single-card">
                <div className="card-header border-0">
                  <img
                    className="text-center"
                    src={data?.img}
                    alt={data?.title}
                  />
                </div>
                <div className="card-block p-4">
                  <h4 className="card-title">{card?.title}</h4>
                  <div className="card-text p-4 text-justify w-100">
                    <h5>Rewards</h5>
                    <ul className="cards-list pl-3">
                      {card?.rewards?.map((reward, ri) => (
                        <li key={ri}> {reward}</li>
                      ))}
                    </ul>
                  </div>
                  {/* modal */}
                  {/* Button trigger modal */}
                  {/* <button type="button" className="btn btn-primary mr-2">
                    <a
                    //   href="tel:+91-7217667147"
                      style={{ color: "#fff", fontWeight: 500 }}
                    >
                      <i className="fas fa-phone-alt pr-2" />
                      Apply
                    </a>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target={".bd-example-modal-lg"+ci}
                  >
                    Know more
                  </button> */}
                </div>
                {/* <div class="w-100"></div> */}
                {/* <div class="card-footer w-100 text-muted">
          FOOTER
      </div> */}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Bank;
