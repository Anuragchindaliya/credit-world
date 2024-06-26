import React from "react";
import useInView from "../../../hooks/useInView";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import HeaderStrip from "./HeaderStrip";
import Navbar from "./Navbar";

const Header = () => {
  // const headerRef = useRef();
  // const [ref, isIntersecting] = useInView({
  //   threshold: 0,
  //   // rootMargin: "150px",
  // });
  // useScrollToTop({ ref });
  return (
    <header className="header-area">
      {/* Top Header Area */}
      <div
        className="top-header-area"
        // ref={ref}
      >
        <HeaderStrip />
      </div>
      {/* Navbar Area */}
      <div
        id="sticker-sticky-wrapper"
        // className={`sticky-wrapper ${!isIntersecting ? "is-sticky" : ""}`}
        className={`sticky-wrapper  tb:w-full [max]  absolute tb:static right-[15px] top-5`}
        style={
          {
            // ...(!isIntersecting && { position: "fixed", width: "100%", top: 0 }),
          }
        }
      >
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
