import React from "react";
import { docTitle } from "../App";
import BankLogo from "../components/common/BankLogo";
import AddressCta from "../components/CTA/AddressCta";
import HomeCta from "../components/CTA/HomeCta";
import HomeCta2 from "../components/CTA/HomeCta2";
import HomeFeatures from "../components/Features/Home";
import Services from "../components/Services";
import HomeSlider from "../components/slider/HomeSlider";
import useTitle from "../hooks/useTitle";

const Home = ({ title }) => {
  useTitle(`${docTitle} | ${title}`);
  return (
    <>
      <HomeSlider />
      <HomeFeatures />
      <HomeCta />
      <HomeCta2 />
      <Services />
      <BankLogo />
      <AddressCta />
    </>
  );
};

export default Home;
