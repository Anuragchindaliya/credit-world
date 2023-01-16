import React from "react";
import { Link } from "react-router-dom";

const HeaderStrip = () => {
  return (
    <>
      
      {/* Top Header Area */}
      <div className="container h-100">
      <marquee>
        Creditworld do not charge any amount for applying credit card
      </marquee>
        <div className="row  align-items-center">
          <div className="col-12 d-flex justify-content-between">
            {/* Logo Area */}
            
            <div className="logo">
              <Link to="/">
                <h1
                className="text-blue-900 text-3xl sm:text-[38px] flex font-['Monotype_Broadway_Regular']"
                  // style={{
                  //   color: "#003679",
                  //   fontSize: 26,
                  //   display: "flex",
                  //   fontFamily: "Monotype Broadway Regular",
                  //   margin: 0,
                  // }}
                >
                  CREDITW
                  <img
                    title="Creditworld"
                    src="assets/img/core-img/cwIcon.png"
                    style={{ width: 30, margin: "auto" }}
                    alt="Creditworld logo"
                  />
                  RLD
                </h1>
                {/* <h1>
                    <span style={{ color: "#ffbb38" }}>Credit</span>
                    <span style={{ color: "#003679" }}>World</span>
                  </h1> */}
              </Link>
            </div>
            {/* Top Contact Info */}
            <div className="top-contact-info hidden tb:flex align-items-center">
              {/* <a
                href="/#"
                data-toggle="tooltip"
                data-placement="bottom"
                title=""
                data-original-title="Delhi NCR in Faridabad, 121001"
              >
                <img src="assets/img/core-img/placeholder.png" alt="" />{" "}
                <span>Delhi NCR in Faridabad, 121001</span>
              </a> */}
              <a
                href="mailto:support@creditworld.in"
                data-toggle="tooltip"
                data-placement="bottom"
                title=""
                data-original-title="support@creditworld.in"
              >
                <img src="assets/img/core-img/message.png" alt="" />
                <span>support@creditworld.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderStrip;
