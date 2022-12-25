import React from "react";

const BankAbout = ({ bankDetails }) => {
  if (!bankDetails) {
    return <div className="container mt-5">Can't find bank details</div>;
  }
  return (
    <div className="container mt-5">
      <div className="card mb-3 text-center border-0">
        {/* {JSON.stringify(data)} */}
        <img
          className="card-img-top center"
          src={bankDetails?.img}
          alt="Card image"
          style={{ width: "100%", margin: "auto" }}
        />
        <div className="card-body p-4">
          <h5 className="card-title">{bankDetails?.name?.toUpperCase()}</h5>
          <p className="card-text text-justify" style={{ color: "#000" }}>
            {bankDetails?.content}
          </p>
          {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        </div>
      </div>
    </div>
  );
};

export default BankAbout;
