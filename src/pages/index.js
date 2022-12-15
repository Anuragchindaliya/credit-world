import React from "react";
import AddressCta from "../components/CTA/AddressCta";
import HomeCta from "../components/CTA/HomeCta";
import HomeCta2 from "../components/CTA/HomeCta2";
import HomeFeatures from "../components/Features/Home";
import Footer from "../components/Footer";
import Services from "../components/Services";
import HomeSlider from "../components/slider/HomeSlider";

const Home = () => {
  return (
    < >
      {/* <HomeSlider /> */}
      <HomeFeatures />
      <HomeCta />
      <HomeCta2 />
      <Services />
      <AddressCta />
    </>
  );
};

export default Home;
