import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useWindowSize from "../../../hooks/useWindowSize";
import Menu from "./Menu";
import menus from "./menus.js";
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
    {/* Navbar Toggler */}
    <div className="w-15 h-10 right-0 top-[4px] tb:hidden px-2 absolute flex  z-40 " onClick={handleDrawer}>
                <span className="navbarToggler m-auto">
                  <span className="rounded-sm cursor-pointer block h-1 mt-1 p-0 relative w-8 duration-300 bg-blue-900" />
                  <span className="rounded-sm cursor-pointer block h-1 mt-1 p-0 relative w-8 duration-300 bg-blue-900" />
                  <span className="rounded-sm cursor-pointer block h-1 mt-1 p-0 relative w-8 duration-300 bg-blue-900" />
                </span>
              </div>
      <div
        className={`credit-main-menu w-0 h-0  tb:w-auto tb:h-auto  ${screenWidth < 990 ? "overflow-hidden":"overflow-visible"} "
        id="sticker`}
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
              
              {/* Menu */}
              {drawerShow && (
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
                />
              )}
              <div className={`classy-menu ${drawerShow ? "menu-on" : ""}`}>
              <div className="top-contact-info align-items-center tb:hidden p-3">
                <a
                  href="mailto:support@creditworld.in"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="support@creditworld.in"
                  data-original-title="support@creditworld.in"
                  className="flex"
                  style={{display:"flex",gap:".5em"}}
                >
                  <img src="assets/img/core-img/message.png" style={{filter: "saturate(25.5)"}} alt="" />
                  <span>support@creditworld.in</span>
                </a>
                </div>
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
