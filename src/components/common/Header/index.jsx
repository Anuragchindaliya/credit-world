import React from "react";
import useInView from "../../../hooks/useInView";
import HeaderStrip from "./HeaderStrip";
import Navbar from "./Navbar";

const Header = () => {
  const [ref, isIntersecting] = useInView({
    threshold: 0,
    // rootMargin: "150px",
  });
  return (
    <header className="header-area">
      {/* Top Header Area */}
      <div className="top-header-area" ref={ref}>
        <HeaderStrip />
      </div>
      {/* Navbar Area */}
      <div
        id="sticker-sticky-wrapper"
        className={`sticky-wrapper ${!isIntersecting ? "is-sticky" : ""}`}
        style={{
          height: 85,
          ...(!isIntersecting && { position: "fixed", width: "100%", top: 0 }),
        }}
      >
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
