import React from "react";
import { Link } from "react-router-dom";

const HeaderStrip = () => {
  return (
    <>
      {/* Top Header Area */}
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 d-flex justify-content-between">
            {/* Logo Area */}
            <div className="logo">
              <Link to="/">
                <h1 style={{ color: "#003679", fontSize: 26,display:"flex",fontFamily:"Monotype Broadway Regular",margin:0 }}>
                  CREDITW
                  <img
                    title="Creditworld"
                    src="assets/img/core-img/cwIcon.png"
                    style={{ width: 40,margin:"auto" }}
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
            <div className="top-contact-info d-flex align-items-center">
              <a
                href="/#"
                data-toggle="tooltip"
                data-placement="bottom"
                title=""
                data-original-title="Delhi NCR in Faridabad, 121001"
              >
                <img src="assets/img/core-img/placeholder.png" alt="" />{" "}
                <span>Delhi NCR in Faridabad, 121001</span>
              </a>
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