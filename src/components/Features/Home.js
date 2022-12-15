import React from "react";

const HomeFeatures = () => {
  return (
    <section className="features-area section-padding-100-0">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="single-features-area mb-100 wow fadeInUp"
              data-wow-delay="100ms"
            >
              {/* Section Heading */}
              <div className="section-heading">
                <div className="line" />
                <p>Take look at our</p>
                <h2>
                  Our credit card
                  {/*Loans*/}
                </h2>
              </div>
              <h6>
                Whether you're looking for a card with great benefits, rates and
                help build your credit. Our company have the credit card for
                you.
              </h6>
              <a href="#" className="btn credit-btn mt-50">
                Discover
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="single-features-area mb-100 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <img src="assets/img/bg-img/2.jpg" alt="" />
              <h5>We take care of you</h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="single-features-area mb-100 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <img src="assets/img/bg-img/3.jpg" alt="" />
              <h5>Apply online for card</h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="single-features-area mb-100 wow fadeInUp"
              data-wow-delay="700ms"
            >
              <img src="assets/img/bg-img/4.jpg" alt="" />
              <h5>Fast &amp; easy process </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
