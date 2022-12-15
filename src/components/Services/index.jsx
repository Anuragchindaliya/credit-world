import React from "react";

const Services = () => {
  return (
    <section className="services-area section-padding-100-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Section Heading */}
            <div
              className="section-heading text-center mb-100 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="line" />
              <p>Take look at our</p>
              <h2>Our services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Single Service Area */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="single-service-area d-flex mb-100 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="icon">
                <i className="icon-profits" />
              </div>
              <div className="text">
                <h5>All the loans</h5>
                <p>
                  Check Different Types of Bank Loans in India: Personal Loan,
                  Home Loan, Credit. In order to be eligible for an education
                  loan, you must submit all the required service.
                </p>
              </div>
            </div>
          </div>
          {/* Single Service Area */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="single-service-area d-flex mb-100 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="icon">
                <i className="icon-money-1" />
              </div>
              <div className="text">
                <h5>Easy and fast process</h5>
                <p>
                  Getting a credit card can be quick and easy depending on your
                  eligiblity. If you're looking for a credit card with easy
                  application approval process.
                </p>
              </div>
            </div>
          </div>
          {/* Single Service Area */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="single-service-area d-flex mb-100 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="icon">
                <i className="icon-coin" />
              </div>
              <div className="text">
                <h5>No additional papers</h5>
                <p>
                  What documents do I need to submit with my credit card
                  application? While not always required, additional
                  documentation can vary from bank
                </p>
              </div>
            </div>
          </div>
          {/* Single Service Area */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="single-service-area d-flex mb-100 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="icon">
                <i className="icon-smartphone-1" />
              </div>
              <div className="text">
                <h5>Secure financial services</h5>
                <p>
                  Personalised comprehensive financial planning service that
                  covers several area of your financial life such as retirement,
                  investment, education, insurance, debt etc.
                </p>
              </div>
            </div>
          </div>
          {/* Single Service Area */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="single-service-area d-flex mb-100 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="icon">
                <i className="icon-diamond" />
              </div>
              <div className="text">
                <h5>Good investments</h5>
                <p>
                  If you’re looking to grow your wealth, you can opt for
                  lower-risk investments that pay a modest return or you can
                  take on more risk and aim for a higher return.
                </p>
              </div>
            </div>
          </div>
          {/* Single Service Area */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="single-service-area d-flex mb-100 wow fadeInUp"
              data-wow-delay="700ms"
            >
              <div className="icon">
                <i className="icon-piggy-bank" />
              </div>
              <div className="text">
                <h5>Accumulation goals</h5>
                <p>
                  Goal Accumulation can include any substantial expense such as
                  the cost of school tuition for children or the purchase of an
                  automobile, new home, or vacation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
