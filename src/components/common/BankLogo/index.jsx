import React, { useMemo } from "react";
import ReactOwlCarousel from "react-owl-carousel";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getAllBanks } from "../../../api";
import "./index.css";
const owlSetting = {
  responsive: {
    0: {
      items: 3.5,
    },
    450: {
      items: 4,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 4.5,
      margin: 30,
    },
  },
  loop: true,
  //   nav: true,
  //   navText: [
  //     '<i class="fa fa-angle-left"></i>',
  //     '<i class="fa fa-angle-right"></i>',
  //   ],
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  smartSpeed: 500,
  // stagePadding: 10,
};

const BankLogo = () => {
  const owlSetting = useMemo(
    () => ({
      responsive: {
        0: {
          items: 2.5,
        },
        450: {
          items: 4,
        },
        600: {
          items: 5,
        },
        1000: {
          items: 4.5,
          margin: 30,
        },
      },
      loop: true,
      //   nav: true,
      //   navText: [
      //     '<i class="fa fa-angle-left"></i>',
      //     '<i class="fa fa-angle-right"></i>',
      //   ],
      dots: false,
      autoplay: true,
      autoplayTimeout: 2000,
      smartSpeed: 500,
      // stagePadding: 10,
    }),
    []
  );
  const banks = useQuery("banks", getAllBanks, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30,
  });
  if (banks.isLoading) return <div>Loading...</div>;
  if (banks.isError) return <div>{banks.error?.toString()}</div>;
  // console.log(banks.data?.data?.banks);
  return (
    <div style={{ paddingBlock: "3em",backgroundColor:"#f7f7f7" }}>
      <div className="elements-title mb-[2rem] text-center">
        <div className="line m-auto" />
        <h2 className="mt-3 font-medium">OUR PARTNERS</h2>
        <p>We have partnered with India's leading Financial Institutions.</p>
      </div>
      <ReactOwlCarousel
        className="banksSlider"
        //   loop
        //   margin={10}
        //   nav
        {...owlSetting}
      >
        {banks.data?.data?.banks?.map((d, i) => {
          return (
            <Link
              key={i}
              className="item"
              to={"/cards/" + d?.slug}
              style={{
                width: "100%",
                padding: "1em",
                display: "flex",
                objectFit: "contain",
                overflow: "hidden",
                alignItems: "center",
              }}
            >
              {/* <h4>{i}</h4> */}
              <img
                src={d.img}
                style={{
                  margin: "auto",
                  display: "block",
                  objectFit: "contain",
                  width: "100%",
                  // height: 100,
                }}
              />
            </Link>
          );
        })}
      </ReactOwlCarousel>
    </div>
  );
};

export default BankLogo;
