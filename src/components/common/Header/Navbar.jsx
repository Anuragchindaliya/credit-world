import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useWindowSize from "../../../hooks/useWindowSize";
import Menu from "./Menu";
import menus from "./menus.json";
const Navbar = () => {
  const { pathname } = useLocation();
  const [drawerShow, setDrawerShow] = useState(false);
  const { width: screenWidth } = useWindowSize();
  const handleDrawer = useCallback(() => {
    setDrawerShow((b) => !b);
  }, []);
  useEffect(() => {
    if (drawerShow) {
      setDrawerShow(false);
    }
  }, [pathname]);

  return (
    <>
      <div
        className="credit-main-menu"
        id="sticker"
        // style={{ width: 615 }}
      >
        <div
          className={`classy-nav-container light left 
          ${screenWidth < 990 ? "breakpoint-on" : "breakpoint-off"}
        `}
        >
          <div className="container">
            {/* Menu */}
            <nav
              className="classy-navbar justify-content-between"
              id="creditNav"
            >
              {/* Navbar Toggler */}
              <div className="classy-navbar-toggler" onClick={handleDrawer}>
                <span className="navbarToggler">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              {/* Menu */}
              {drawerShow && 
              <div
              onClick={handleDrawer}
                style={{
                  backgroundColor: "rgba(0,0,0,.1)",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />}
              <div className={`classy-menu ${drawerShow ? "menu-on" : ""}`}>
                {/* Close Button */}
                <div className="classycloseIcon" onClick={handleDrawer}>
                  <div className="cross-wrap">
                    <span className="top" />
                    <span className="bottom" />
                  </div>
                </div>
                {/* Nav Start */}
                <div className="classynav">
                  <ul>
                    {menus.map((item, i) => {
                      if (item?.hasChildren) {
                        return <Menu key={i} item={item} />;
                      }
                      return (
                        <li key={i}>
                          <NavLink
                            className={item?.className}
                            to={item?.href}
                            // style={({ isActive }) =>
                            //   isActive ? { color: "#ffbb38" } : undefined
                            // }
                            preventScrollReset={true}
                          >
                            {item?.title}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* Nav End */}
              </div>
              {/* Contact */}
              {/* <div className="contact">
                <a href="tel:+91-9654069069">
                  <img src="assets/img/core-img/call2.png" alt="" />
                  +91-9654069069
                </a>
              </div> */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
