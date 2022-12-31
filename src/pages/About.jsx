import React from "react";
import { Link } from "react-router-dom";
import { docTitle } from "../App";
import Breadcrumb from "../components/common/Breadcrumb";
import useTitle from "../hooks/useTitle";

const About = ({ title }) => {
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
                <Link to="/download" className="btn credit-btn mt-50">
                  Download Applicats
                </Link>
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
      {/* ##### Call To Action Start ###### */}
      <section className="cta-area d-flex flex-wrap">
        {/* Cta Content */}
        <div className="cta-content">
          {/* Section Heading */}
          <div className="section-heading white">
            <div className="line" />
            <p>Direction</p>
            <h2>Credit Milestones</h2>
          </div>
          <h6 className="mb-0" style={{ textAlign: "justify" }}>
            As the credit card provided to you will help you to increase your
            purchasing power and simultaneously helps to raise your Real Income
            to all of your requirements. As credit card is already much familiar
            word and performs the same functions as debit card performs. The
            only difference is that you don't need to maintain your own balance
            with the same. So because of this, you can channelize your own
            savings in some other areas. It seems like the most friendly and
            feasible plastic money which you can possess without even any
            weight. There is no limited and restricted area where you are not
            allowed to use the card. It just required a smart use, so that you
            get most of its benefits.
          </h6>
        </div>
        {/* Cta Thumbnail */}
        <div
          className="cta-thumbnail bg-img jarallax"
          style={{ backgroundImage: "url(assets/img/bg-img/19.jpg)" }}
        />
      </section>
      {/* ##### Call To Action End ###### */}
      {/* ##### Call To Action Start ###### */}
      <section className="cta-area d-flex flex-wrap">
        {/* Cta Thumbnail */}
        <div
          className="cta-thumbnail bg-img jarallax"
          style={{ backgroundImage: "url(assets/img/bg-img/21.jpg)" }}
        />
        {/* Cta Content */}
        <div
          className="cta-content special-feature-content"
          style={{ backgroundColor: "#003679" }}
        >
          {/* Section Heading */}
          <div className="section-heading white">
            <div className="line" />
            <p>Direction</p>
            <h2>Credit Milestones</h2>
          </div>
          <h6 className="mb-0" style={{ textAlign: "justify" }}>
            Just to add more to your knowledge Bankblaze always there to help
            you that how to use the credit card so you enjoy the best possible
            benefits arise out of it. You don't worry about the balance
            maintains in it as is provided by credit card as it's not your save
            money. You just need to use the amount where uh think fit and easily
            return it back with easy terms and available time period which is of
            50 days. You can easily withdraw and make online payments
            comfortably. The most important benefit is that credit cards even
            making money on your expenditure also. As you get reward points by
            spending money and you can also use these earned rewards for
            purchasing other new things.
          </h6>
        </div>
      </section>
      {/* ##### Call To Action End ###### */}
      {/* ##### Call To Action Start ###### */}
      <section className="cta-area d-flex flex-wrap">
        {/* Cta Content */}
        <div className="cta-content">
          {/* Section Heading */}
          <div className="section-heading white">
            <div className="line" />
            <p>Direction</p>
            <h2>Credit Milestones</h2>
          </div>
          <h6 className="mb-0" style={{ textAlign: "justify" }}>
            We have achieved many Milestones During our journey of Cards
            distributor which could have not been possible without the support
            and blessings of our clients. They supported us and Trusted us
            Throughout. We once again thank our clients for putting trust on us
            and giving us the opportunity to serve them.
          </h6>
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            {/* Single Cool Facts */}
            <div className="single-cool-fact white d-flex align-items-center mt-50">
              <div className="scf-icon mr-15">
                <i className="icon-piggy-bank" />
              </div>
              <div className="scf-text">
                <h2>
                  <span className="counter">3725</span>
                </h2>
                <p>Clients</p>
              </div>
            </div>
            {/* Single Cool Facts */}
            <div className="single-cool-fact white d-flex align-items-center mt-50">
              <div className="scf-icon mr-15">
                <i className="icon-coin" />
              </div>
              <div className="scf-text">
                <h2>
                  <span className="counter">35</span>
                </h2>
                <p>Creditors</p>
              </div>
            </div>
            {/* Single Cool Facts */}
            <div className="single-cool-fact white d-flex align-items-center mt-50">
              <div className="scf-icon mr-15">
                <i className="icon-diamond" />
              </div>
              <div className="scf-text">
                <h2>
                  <span className="counter">8</span>
                </h2>
                <p>awards</p>
              </div>
            </div>
          </div>
        </div>
        {/* Cta Thumbnail */}
        <div
          className="cta-thumbnail bg-img jarallax"
          style={{ backgroundImage: "url(assets/img/bg-img/19.jpg)" }}
        />
      </section>
      {/* ##### Call To Action End ###### */}
      {/* ##### Call To Action Start ###### */}
      <section className="cta-2-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Cta Content */}
              <div className="cta-content d-flex flex-wrap align-items-center justify-content-between">
                <div className="cta-text">
                  <h4>Are you in need for a cards? Get in touch with us.</h4>
                  <p>
                    Contact us to get credit cards. You can just give us a call
                    or fill in our form below.
                  </p>
                </div>
                <div className="cta-btn">
                  <a href="post" className="btn credit-btn box-shadow">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Call To Action End ###### */}
    </>
  );
};

export default About;
