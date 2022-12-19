import React from "react";

const HomeCta = () => {
  return (
    <section className="cta-area d-flex flex-wrap">
      {/* Cta Thumbnail */}
      <div
        className="cta-thumbnail bg-img jarallax"
        style={{ backgroundImage: "url(assets/img/bg-img/5.jpg)" }}
      />
      {/* Cta Content */}
      <div className="cta-content">
        {/* Section Heading */}
        <div className="section-heading white">
          <div className="line" />
          <p>Bold desing and beyound</p>
          <h2>Helping small businesses like yours</h2>
        </div>
        <h6>
          Marketing your small business on a shoestring budget isn't easy but it
          is possible. Here are ten marketing strategies that can help you
          market your small business on. Because we work closely with small
          businesses like yours every day.
        </h6>
        <div className="d-flex flex-wrap mt-50">
          {/* Single Skills Area */}
          <div className="single-skils-area mb-70 mr-5">
            <div id="circle" className="circle" data-value="0.90">
              <div className="skills-text">
                <span>90%</span>
              </div>
            </div>
            <p>Energy</p>
          </div>
          {/* Single Skills Area */}
          <div className="single-skils-area mb-70 mr-5">
            <div id="circle2" className="circle" data-value="0.75">
              <div className="skills-text">
                <span>75%</span>
              </div>
            </div>
            <p>power</p>
          </div>
          {/* Single Skills Area */}
          <div className="single-skils-area mb-70">
            <div id="circle3" className="circle" data-value="0.97">
              <div className="skills-text">
                <span>97%</span>
              </div>
            </div>
            <p>resource</p>
          </div>
        </div>
        <a href="/#" className="btn credit-btn box-shadow btn-2">
          Read More
        </a>
      </div>
    </section>
  );
};

export default HomeCta;
