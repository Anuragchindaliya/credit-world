import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";

const Contact = ({ title }) => {
  return (
    <>
      <Breadcrumb title={title} />
      <section className="contact-area section-padding-100-0" id="contact">
        <div className="container">
          <div className="row">
            {/* Single Contact Area */}
            <div className="col-12 col-lg-6">
              <div className="single-contact-area mb-100">
                {/* Logo */}
                <a href="#" className="d-block mb-50">
                  <img src="assets/img/core-img/logo.png" alt="" />
                </a>
                <p style={{ textAlign: "justify" }}>
                  Didn't find what you were looking for, Need help to get a
                  Credit card or reporting a lost card? Contact us for
                  assistance. Chat with us now, send us an email and leave a
                  message in chat as you can see at the right bottom side of a
                  screen, or click here to find a list of phone numbers to call
                  our Customer Assistance Centre.
                </p>
              </div>
            </div>
            {/* Single Contact Area */}
            <div className="col-12 col-lg-1">
              <div className="single-contact-area mb-100">
                {/* <div className="contact-advisor">
                  <h5>Contact an advisor</h5>
                  <div className="single-advisor d-flex align-items-center">
                    <div className="advisor-img">
                      <img src="assets/img/bg-img/25.jpg" alt="" />
                    </div>
                    <div className="advisor-info">
                      <h6>Karan singh</h6>
                      <span>Advisor</span>
                      <a href="tel:+91-7217667147">
                        <p>+91-7217667147</p>
                      </a>
                    </div>
                  </div>
                  <div className="single-advisor d-flex align-items-center">
                    <div className="advisor-img">
                      <img src="assets/img/bg-img/26.jpg" alt="" />
                    </div>
                    <div className="advisor-info">
                      <h6>Anurag chindaliya</h6>
                      <span>Advisor</span>
                      <a href="tel:+91-9625891968">
                        <p>+91-9625891968</p>
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* Single Contact Area */}
            <div className="col-12 col-lg-5">
              <div className="single-contact-area mb-100">
                <div className="contact--area contact-page">
                  {/* Contact Content */}
                  <div className="contact-content">
                    <h5>Get in touch</h5>
                    {/* Single Contact Content */}
                    <div className="single-contact-content d-flex align-items-center">
                      <div className="icon">
                        <img
                          src="assets/img/core-img/location.png"
                          alt="Address"
                        />
                      </div>
                      <div className="text">
                        <p>Head Office </p>
                        <span>Neelam Bata Road, Nit Faridabad, 121001</span>
                      </div>
                    </div>
                    {/* Single Contact Content */}
                    {/* <div className="single-contact-content d-flex align-items-center">
                      <a href="tel:+91-7217667147">
                        <div className="icon">
                          <img
                            src="assets/img/core-img/call.png"
                            alt="Contact us"
                          />
                        </div>
                      </a>
                      <div className="text">
                        <a href="tel:+91-7217667147" title="+91-7217667147">
                          <p> +91-7217667147</p>
                        </a>
                        <span>mon-fri , 10.am - 06.pm</span>
                      </div>
                    </div> */}
                    {/* Single Contact Content */}
                    <div className="single-contact-content d-flex align-items-center">
                      <a href="mailto:umeshkumar.bankbizz@gmail.com">
                        <div className="icon">
                          <img src="assets/img/core-img/message2.png" alt="" />
                        </div>
                      </a>
                      <div className="text">
                        <a
                          href="mailto:support@creditworld.in"
                          title="umeshkumar.bankbizz@gmail.com"
                        >
                          <p>support</p>
                          <span title="WE REPLY IN 24 HRS">-@creditworld.in</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12"></div>
            </div>
          </div>
        </section> */}
      </section>
    </>
  );
};

export default Contact;
