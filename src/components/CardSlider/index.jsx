import React, { useMemo } from "react";
import ReactOwlCarousel from "react-owl-carousel";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getAllCards } from "../../api";
// import "./index.css";

const CardSlider = () => {
  const owlSetting = useMemo(
    () => ({
      responsive: {
        0: {
          items: 1.5,
        },
        450: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4.5,
          margin: 30,
        },
      },
      //   nav: true,
      //   navText: [
      //     '<i class="fa fa-angle-left"></i>',
      //     '<i class="fa fa-angle-right"></i>',
      //   ],
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      smartSpeed: 500,
      // stagePadding: 10,
    }),
    []
  );
  const cards = useQuery("cards", getAllCards, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30,
  });
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
    <div style={{ paddingBlock: "3em" }}>
      <ReactOwlCarousel
        className="cardsSlider"
        //   loop
        //   margin={10}
        //   nav
        {...owlSetting}
      >
        {cards.data?.data?.cards?.map((d, i) => {
          return (
            <div
              key={i}
              className="item"
              //   to={"/cards/" + d?.slug}
              style={{
                width: "100%",
                padding: "1em",
                // display: "flex",
                // objectFit: "contain",
                // overflow: "hidden",
                // alignItems: "center",
                // flexDirection: "column",
              }}
            >
              <img
                src={d.img}
                style={{
                  margin: "auto",
                  display: "block",
                  objectFit: "contain",
                  //   width: "100%",
                  // height: 100,
                }}
              />
              <h6 className="mt-2 text-left d-block">{d?.name}</h6>
            </div>
          );
        })}
      </ReactOwlCarousel>
    </div>
  );
};

export default CardSlider;
