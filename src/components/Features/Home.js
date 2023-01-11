import React from "react";
const features = [
  { title: <>We take care of you</>, img: "assets/img/bg-img/2.jpg" },
  { title: <>Apply for credit card</>, img: "assets/img/bg-img/3.jpg" },
  { title: <>Fast &amp; easy process </>, img: "assets/img/bg-img/4.jpg" },
  { title: <>Fast &amp; easy process </>, img: "assets/img/bg-img/4.jpg" },
];

const featuresIcon = [
  {
    title:"Credit Card",
    icon:"icon-credit-card-1"
  },
  {
    title:"Loans",
    icon:"icon-coin"
  },
  {
    title:"Insurance",
    icon:"icon-safebox"
  },
  {
    title:"Check Cibil score",
    icon:"icon-balance"
  }
]

const HomeFeatures = () => {
  return (
    <section className="features-area  py-20">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            <div
              className="single-features-area mb-10 wow fadeInUp"
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
              {/* <a href="/#" className="btn credit-btn mt-50">
                Discover
              </a> */}
            </div>
          </div>
          {/* {features?.map((d, i) => {
            return (
              <div key={i} className="col-6 col-sm-6 col-lg-2">
                <div
                  className="single-features-area my-2   sm:my-5 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <img src={d.img} alt="" className="" />
                  <h5>{d?.title}</h5>
                </div>
              </div>
            );
          })} */}
          {featuresIcon?.map((d, i) => {
            return (
              <div key={i} className="col-6 col-sm-6 col-lg-2 ">
                <div className="single-icons mb-30 transition-all shadow-[0_7px_10px_-4px_rgba(0,0,0,0.2)] hover:shadow-[rgba(0,0,0,.6)]  border-b-4 border-red-600" style={{padding:"30px 20px"}} >
                  <i className={d?.icon} style={{fontSize:66,marginBottom:10}} />
                  <span>{d?.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
