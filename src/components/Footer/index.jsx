import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area section-padding-100-0">
      <div className="container">
        <div className="row">
          {/* Single Footer Widget */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="single-footer-widget mb-100">
              <h5 className="widget-title">About Us</h5>
              {/* Nav */}
              <nav>
                <ul>
                  <li>
                    <a href="index">Homepage</a>
                  </li>
                  <li>
                    <a href="about">About Us</a>
                  </li>
                  <li>
                    <a href="services">Services &amp; Offers</a>
                  </li>
                  {/* <li><a href="portfolio">Portfolio Presentation</a></li> */}
                  <li>
                    <a href="post">The News</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* Single Footer Widget */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="single-footer-widget mb-100">
              <h5 className="widget-title">Solutions</h5>
              {/* Nav */}
              <nav>
                <ul>
                  <li>
                    <a href="#">Our Cards</a>
                  </li>
                  {/* <li><a href="#">Trading &amp; Commerce</a></li> */}
                  <li>
                    <a href="#">Accumulation goal</a>
                  </li>
                  <li>
                    <a href="#">Secure financial service</a>
                  </li>
                  <li>
                    <a href="#">Good investment</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* Single Footer Widget */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="single-footer-widget mb-100">
              <h5 className="widget-title">Our Loans</h5>
              {/* Nav */}
              <nav>
                <ul>
                  <li>
                    <a href="#">Our Loans</a>
                  </li>
                  {/* <li><a href="#">Trading &amp; Commerce</a></li> */}
                  <li>
                    <a href="#">Banking &amp; Private Equity</a>
                  </li>
                  <li>
                    <a href="#">Industrial &amp; Factory</a>
                  </li>
                  <li>
                    <a href="#">Financial Solutions</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* Single Footer Widget */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="single-footer-widget mb-100">
              <h5 className="widget-title">Latest News</h5>
              {/* Single News Area */}
              <div className="single-latest-news-area d-flex align-items-center">
                <div className="news-thumbnail">
                  <img src="assets/img/bg-img/7.jpg" alt="" />
                </div>
                <div className="news-content">
                  <a href="post#tab1">How to get the best loan?</a>
                  <div className="news-meta">
                    <a href="contact" className="post-author">
                      <img src="assets/img/core-img/pencil.png" alt="" />
                      Karan
                    </a>
                    <a href="contact" className="post-date">
                      <img src="assets/img/core-img/calendar.png" alt="" />
                      April 26
                    </a>
                  </div>
                </div>
              </div>
              {/* Single News Area */}
              <div className="single-latest-news-area d-flex align-items-center">
                <div className="news-thumbnail">
                  <img src="assets/img/bg-img/8.jpg" alt="" />
                </div>
                <div className="news-content">
                  <a href="post#tab2">A new way to get a loan</a>
                  <div className="news-meta">
                    <a href="contact" className="post-author">
                      <img src="assets/img/core-img/pencil.png" alt="" />
                      Anurag
                    </a>
                    <a href="contact" className="post-date">
                      <img src="assets/img/core-img/calendar.png" alt="" />
                      April 26
                    </a>
                  </div>
                </div>
              </div>
              {/* Single News Area */}
              <div className="single-latest-news-area d-flex align-items-center">
                <div className="news-thumbnail">
                  <img src="assets/img/bg-img/9.jpg" alt="" />
                </div>
                <div className="news-content">
                  <a href="post#tab3">Finance you home</a>
                  <div className="news-meta">
                    <a href="contact" className="post-author">
                      <img src="assets/img/core-img/pencil.png" alt="" />
                      Sachin
                    </a>
                    <a href="contact" className="post-date">
                      <img src="assets/img/core-img/calendar.png" alt="" />
                      April 26
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copywrite Area */}
      <div className="copywrite-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copywrite-content d-flex flex-wrap justify-content-between align-items-center">
                {/* Footer Logo */}
                <a href="index" className="footer-logo" style={{
                      filter: "drop-shadow(-4px 4px 3px black)!important",
                    }}>
                  {/* <img src="assets/img/core-img/dpr.png" alt="" /> */}
                  <h1
                    
                  >
                    <span style={{ color: "#ffbb38" }}>Credit</span>
                    <span style={{ color: "#003679" }}>World</span>
                  </h1>
                </a>
                {/* Copywrite Text */}
                <p className="copywrite-text">
                  <a href="#">
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved |  Made with{" "}
                    <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                  </a>
                  <a
                    href="https://www.facebook.com/AnnuragChindaliya"
                    target="_blank"
                  >
                    Anurag
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
