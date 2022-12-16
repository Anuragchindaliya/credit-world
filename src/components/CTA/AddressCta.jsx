import React from "react";

const AddressCta = () => {
  return (
    <section className="miscellaneous-area bg-gray section-padding-100-0">
      <div className="container">
        <div className="row align-items-end justify-content-center">
          {/* Add Area */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="add-area mb-100 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <a className="get-img" href="#">
                <img src="assets/img/bg-img/2.jpg" alt="" />
              </a>
            </div>
          </div>
          {/* Contact Area */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="contact--area mb-100 wow fadeInUp"
              data-wow-delay="300ms"
            >
              {/* Section Heading */}
              <div className="section-heading mb-50">
                <div className="line" />
                <h2>Get in touch</h2>
              </div>
              {/* Contact Content */}
              <div className="contact-content">
                {/* Single Contact Content */}
                <div className="single-contact-content d-flex align-items-center">
                  <div className="icon">
                    <img src="assets/img/core-img/location.png" alt="" />
                  </div>
                  <div className="text">
                    <p>Delhi NCR </p>
                    <span>at Faridabad, 121001</span>
                  </div>
                </div>
                {/* Single Contact Content */}
                {/* <div className="single-contact-content d-flex align-items-center">
                  <a href="tel:+91-9654069069">
                    <div className="icon">
                      <img src="assets/img/core-img/call.png" alt="" />
                    </div>
                  </a>
                  <div className="text">
                    <a href="tel:+91-7217667147">
                      <p> +91-9654069069</p>
                    </a>
                    <span>mon-fri , 10.am - 06.pm</span>
                  </div>
                </div> */}
                {/* Single Contact Content */}
                <div className="single-contact-content d-flex align-items-center">
                  <a href="mailto:naveenkumar@gmail.com">
                    <div className="icon">
                      <img src="assets/img/core-img/message2.png" alt="" />
                    </div>
                  </a>
                  <div className="text">
                    <a href="mailto:info.creditworld@gmail.com">
                      <p>info.creditworld</p>
                      <span>-@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* News Area */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="news--area mb-100 wow fadeInUp"
              data-wow-delay="500ms"
            >
              {/* Section Heading */}
              <div className="section-heading mb-50">
                <div className="line" />
                <h2>The news</h2>
              </div>
              {/* Single News Area */}
              <div className="single-news-area d-flex align-items-center">
                <div className="news-thumbnail">
                  <img src="assets/img/bg-img/10.jpg" alt="" />
                </div>
                <div className="news-content">
                  <span>July 18, 2018</span>
                  <a href="#">How to get the best loan online</a>
                  <div className="news-meta">
                    <a href="#" className="post-author">
                      <img src="assets/img/core-img/pencil.png" alt="" /> Sachin
                    </a>
                    <a href="#" className="post-date">
                      <img src="assets/img/core-img/calendar.png" alt="" /> April 26
                    </a>
                  </div>
                </div>
              </div>
              {/* Single News Area */}
              <div className="single-news-area d-flex align-items-center">
                <div className="news-thumbnail">
                  <img src="assets/img/bg-img/11.jpg" alt="" />
                </div>
                <div className="news-content">
                  <span>July 18, 2018</span>
                  <a href="#">A new way to finance your dream home</a>
                  <div className="news-meta">
                    <a href="#" className="post-author">
                      <img src="assets/img/core-img/pencil.png" alt="" /> Karan singh
                    </a>
                    <a href="#" className="post-date">
                      <img src="assets/img/core-img/calendar.png" alt="" /> April 26
                    </a>
                  </div>
                </div>
              </div>
              {/* Single News Area */}
              <div className="single-news-area d-flex align-items-center">
                <div className="news-thumbnail">
                  <img src="assets/img/bg-img/12.jpg" alt="" />
                </div>
                <div className="news-content">
                  <span>July 18, 2018</span>
                  <a href="#">10 tips to get the best loan for you</a>
                  <div className="news-meta">
                    <a href="#" className="post-author">
                      <img src="assets/img/core-img/pencil.png" alt="" /> Anurag ..
                    </a>
                    <a href="#" className="post-date">
                      <img src="assets/img/core-img/calendar.png" alt="" /> April 26
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressCta;
