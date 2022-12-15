import React from "react";

const HomeSlider = () => {
  return (
    <div className="hero-area">
      <div className="hero-slideshow owl-carousel">
        {/* Single Slide */}
        <div className="single-slide bg-img">
          {/* Background Image*/}
          <div
            className="slide-bg-img bg-img bg-overlay"
            style={{ backgroundImage: "url(assets/img/plastic.jpg)" }}
          />
          {/* Welcome Text */}
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-12 col-lg-9">
                <div className="welcome-text text-center">
                  <h6 data-animation="fadeInUp" data-delay="100ms">
                    15 Days Process
                  </h6>
                  <h2 data-animation="fadeInUp" data-delay="300ms">
                    get your <span>Card</span> now
                  </h2>
                  <p data-animation="fadeInUp" data-delay="500ms">
                    Go faster with your SMART CARD be travel your hobby
                  </p>
                  <a
                    href="#"
                    className="btn credit-btn mt-50"
                    data-animation="fadeInUp"
                    data-delay="700ms"
                  >
                    Discover
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Slide Duration Indicator */}
          <div className="slide-du-indicator" />
        </div>
        {/* Single Slide */}
        <div className="single-slide bg-img">
          {/* Background Image*/}
          <div
            className="slide-bg-img bg-img bg-overlay"
            style={{ backgroundImage: "url(assets/img/bg-img/5.jpg)" }}
          />
          {/* Welcome Text */}
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-12 col-lg-9">
                <div className="welcome-text text-center">
                  <h6 data-animation="fadeInDown" data-delay="100ms">
                    45 Days Interest Free
                  </h6>
                  <h2 data-animation="fadeInDown" data-delay="300ms">
                    get your <span>Credit</span> now
                  </h2>
                  <p data-animation="fadeInDown" data-delay="500ms">
                    Can you use your credit card to buy beyond your card limit?
                  </p>
                  <a
                    href="#"
                    className="btn credit-btn mt-50"
                    data-animation="fadeInDown"
                    data-delay="700ms"
                  >
                    Discover
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Slide Duration Indicator */}
          <div className="slide-du-indicator" />
        </div>
        {/* Single Slide */}
        <div className="single-slide bg-img">
          {/* Background Image*/}
          <div
            className="slide-bg-img bg-img bg-overlay"
            style={{ backgroundImage: "url(assets/img/bg-img/1.jpg)" }}
          />
          {/* Welcome Text */}
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-12 col-lg-9">
                <div className="welcome-text text-center">
                  <h6 data-animation="fadeInUp" data-delay="100ms">
                    2 years interest
                  </h6>
                  <h2 data-animation="fadeInUp" data-delay="300ms">
                    get your <span>loan</span> now
                  </h2>
                  <p data-animation="fadeInUp" data-delay="500ms">
                    Understand Your Credit. You generally need credit to get a
                    bank loan.
                  </p>
                  <a
                    href="#"
                    className="btn credit-btn mt-50"
                    data-animation="fadeInUp"
                    data-delay="700ms"
                  >
                    Discover
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Slide Duration Indicator */}
          <div className="slide-du-indicator" />
        </div>
        {/* Single Slide */}
        {/* <div class="single-slide bg-img"> */}
        {/* Background Image*/}
        {/* <div class="slide-bg-img bg-img bg-overlay" style="background-image: url(assets/img/bg-img/5.jpg);"></div> */}
        {/* Welcome Text */}
        {/* <div class="container h-100">
              <div class="row h-100 align-items-center justify-content-center">
                  <div class="col-12 col-lg-9">
                      <div class="welcome-text text-center">
                          <h6 data-animation="fadeInDown" data-delay="100ms">2 years interest</h6>
                          <h2 data-animation="fadeInDown" data-delay="300ms">get your <span>loan</span> now</h2>
                          <p data-animation="fadeInDown" data-delay="500ms">Vestibulum eu vehicula elit, nec elementum orci. Praesent aliquet ves tibulum tempus. Pellentesque posuere pharetra turpis, eget finibus erat porta placerat.</p>
                          <a href="#" class="btn credit-btn mt-50" data-animation="fadeInDown" data-delay="700ms">Discover</a>
                      </div>
                  </div>
              </div>
          </div> */}
        {/* Slide Duration Indicator */}
        {/* <div class="slide-du-indicator"></div>
      </div> */}
      </div>
    </div>
  );
};

export default HomeSlider;
