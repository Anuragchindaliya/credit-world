import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
// const owlSetting = {
//   dots: false,
//   items: 1,
//   loop: true,
//   dragClass: "owl-drag hero-items",
//   smartSpeed: 100,
//   nav: true,
//   navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
// };
const owlSetting = {
  items: 1,
  loop: true,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  dots: true,
  autoplay: true,
  autoplayTimeout: 10000,
  smartSpeed: 500,
};
const slides = [
  {
    title: (
      <>
        get your <span>Card</span> now
      </>
    ),
    subTitle: "15 Days Process",
    description: "Go faster with your SMART CARD be travel your hobby",
    bgimg: "assets/img/bg-img/1.jpg",
    targetLink: "/",
    button: (
      <Link
        to={"/register"}
        className="btn credit-btn mt-50"
        data-animation="fadeInUp"
        data-delay="700ms"
      >
        Apply Now
      </Link>
    ),
  },
  {
    title: (
      <>
        get your <span>Credit</span> now
      </>
    ),
    subTitle: "45 Days Interest Free",
    description: "Can you use your credit card to buy beyond your card limit?",
    bgimg: "assets/img/bg-img/5.jpg",
    targetLink: "/",
    button: (
      <a
        href={"/"}
        className="btn credit-btn mt-50"
        data-animation="fadeInUp"
        data-delay="700ms"
      >
        Discover
      </a>
    ),
  },
  {
    title: (
      <>
        get your <span>loan</span> now
      </>
    ),
    subTitle: "2 years interest",
    description:
      "Understand Your Credit. You generally need credit to get a bank loan.",
    bgimg: "assets/img/bg-img/21.jpg",
    targetLink: "/",
    button: (
      <a
        href={"/"}
        className="btn credit-btn mt-50"
        data-animation="fadeInUp"
        data-delay="700ms"
      >
        Discover
      </a>
    ),
  },
];
const HomeSlider = () => {
  return (
    <div className="hero-area">
      {/* <h1>slider</h1> */}
      <ReactOwlCarousel className="hero-slideshow owl-carousel" {...owlSetting}>
        {/* Single Slide */}
        {slides.map((item, i) => (
          <div key={i} className="single-slide bg-img">
            {/* Background Image*/}
            <div
              className="slide-bg-img bg-img bg-overlay"
              style={{ backgroundImage: `url(${item?.bgimg})` }}
            />
            {/* Welcome Text */}
            <div className="container h-100">
              <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12 col-lg-9">
                  <div className="welcome-text text-center">
                    <h6 data-animation="fadeInUp" data-delay="100ms">
                      {/* 15 Days Process */}
                      {item?.subTitle}
                    </h6>
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      {/* get your <span>Card</span> now */}
                      {item?.title}
                    </h2>
                    <p data-animation="fadeInUp" data-delay="500ms">
                      {item?.description}
                    </p>
                    {item?.button}
                    {/* <Link
                      to={item?.targetLink}
                      className="btn credit-btn mt-50"
                      data-animation="fadeInUp"
                      data-delay="700ms"
                    >
                      Apply Now
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Slide Duration Indicator */}
            <div className="slide-du-indicator" />
          </div>
        ))}
      </ReactOwlCarousel>
    </div>
  );
};

export default HomeSlider;
