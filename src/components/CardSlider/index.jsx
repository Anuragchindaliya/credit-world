import React, { useMemo } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getCardsByBankId } from "../../api";
// import "./index.css";

const CardSlider = () => {
  const owlSetting = useMemo(
    () => ({
      responsive: {
        0: {
          items: 1,
          margin: 30,
        },
      },
      nav: false,
      // navText: [
      //   '<i class="fa fa-angle-left"></i>',
      //   '<i class="fa fa-angle-right"></i>',
      // ],
      dots: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      smartSpeed: 500,
      // stagePadding: 10,
    }),
    []
  );
  // useQuery(
  //   ["card", bankId],
  //   () => {
  //     return getCardsByBankId(bankId);
  //   },
  const cards = useQuery(
    ["card", 1],
    () => {
      return getCardsByBankId(1);
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 30,
    }
  );
  if (cards.isLoading)
    return (
      <div className="container py-5 my-5 d-flex justify-content-center align-items-center">
        <h4>
          <div className="spinner-border text-primary mx-2" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          Loading Cards...
        </h4>
      </div>
    );
  if (cards.isError) return <div>{cards.error?.toString()}</div>;
  // console.log(cards.data?.data?.cards);
  return (
    <div style={{ paddingBlock: "1em" }}>
      <ReactOwlCarousel
        className="owl-carousel owl-theme"
        //   loop
        //   margin={10}
        nav
        {...owlSetting}
      >
        {cards.data?.data?.cards?.map((d, i) => {
          return (
            <div
              key={i}
              className="item row"
              //   to={"/cards/" + d?.slug}
              style={{
                width: "100%",
                padding: "1em",
                display: "flex",
                // objectFit: "contain",
                // overflow: "hidden",
                // alignItems: "center",
                // flexDirection: "column",
              }}
            >
              <div className="col-lg-4 p-0 mb-3">
                <img
                  src={d.img}
                  style={
                    {
                      // margin: "auto",
                      // display: "block",
                      // objectFit: "contain",
                      //   width: "100%",
                      // height: 100,
                    }
                  }
                />
              </div>
              <div className="col-lg-8">
                <h6 className="text-xl font-extrabold">{d?.name}</h6>
                <p dangerouslySetInnerHTML={{ __html: d?.content }} />
              </div>
            </div>
          );
        })}
      </ReactOwlCarousel>
    </div>
  );
};

export default CardSlider;
