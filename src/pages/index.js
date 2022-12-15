import React from "react";
import AddressCta from "../components/CTA/AddressCta";
import HomeCta from "../components/CTA/HomeCta";
import HomeCta2 from "../components/CTA/HomeCta2";
import HomeFeatures from "../components/Features/Home";
import Services from "../components/Services";
import HomeSlider from "../components/slider/HomeSlider";

const Home = () => {
  return (
    <section >
      {/* <HomeSlider /> */}
      <HomeFeatures />
      <HomeCta />
      <HomeCta2 />
      <Services />
      <AddressCta />
    </section>
  );
};

export default Home;
