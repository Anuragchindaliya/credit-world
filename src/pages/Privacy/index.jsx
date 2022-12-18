import React from "react";
import { docTitle } from "../../App";
import Breadcrumb from "../../components/common/Breadcrumb";
import useTitle from "../../hooks/useTitle";

const Privacy = ({ title }) => {
  useTitle(`${title} | ${docTitle}`);
  return (
    <>
      <Breadcrumb title={title} />
      <section className="about-area section-padding-100-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="about-content mb-100">
                {/* Section Heading */}
                <div className="section-heading">
                  <div className="line" />
                  <p>Take look at our</p>
                  <h2>About our company</h2>
                </div>
                <h6 className="mb-4">
                  Creditworld is one of the newly startup for India’s digital
                  consumer credit market place. We deals in all the financial
                  and insurance related products like credit cards, Emi cards,
                  Insurance and loans through ours more than 50+ partners of
                  banking and insurance industries. We help our customers to
                  choose the best suitable product to full fill their needs.
                  {/* Creditworld is a leading service provider and distributor of
                  Credit cards and services for the infrastructure and
                  agricultural markets.{" "} */}
                </h6>
                <p className="mb-0">
                  We are passionate about our service. We pride ourselves on
                  being people of integrity who excel at delivering results.
                  {/* We pursue opportunities for growth by taking Credit cards and
                  processes to new markets, Providing new products for existing citizens, and continually
                  improving across the company to ensure that Creditworld solutions are always the global industry
                  leader. */}
                  Let be the part of the group of peoples who are able to
                  fulfill their dreams, even with less Income. So to put your
                  dreams closer to you and make your all desires come true,
                  Creditworld working for you. We offer you the most suitable
                  card which totally complementary to your profile.
                </p>
                <a href="post" className="btn credit-btn mt-50">
                  Discover
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="about-thumbnail mb-100">
                <img src="assets/img/bg-img/14.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
