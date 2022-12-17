import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useWindowSize from "../../../hooks/useWindowSize";
import Menu from "./Menu";
const menus = [
  {
    title: "Home",
    className: "home",
    href: "/",
    hasChildren: false,
  },
  {
    title: "About",
    className: "about",
    href: "/about",
    hasChildren: false,
  },
  {
    title: "Service",
    className: "serv has-down",
    hasChildren: true,
    child: [
      {
        title: "Credit Card",
        href: "credit-card",
      },
      {
        title: "Loan",
        href: "loan",
      },
    ],
  },
  {
    title: "Bank list",
    className: "bank-list has-down megamenu-item",
    href: "/",
    hasChildren: true,
    type: "mega",
    child: [
      [
        {
          title: "HDFC BANK",
          href: "hdfc",
        },
        {
          title: "SBI BANK",
          href: "sbi",
        },
      ],
      [
        {
          title: "ICICI BANK",
          href: "icici",
        },
        {
          title: "BANK OF BARODA",
          href: "bob",
        },
      ],
      [
        {
          title: "INDUSIND BANK",
          href: "indus",
        },
        {
          title: "KOTAk MAHINDRA BANK",
          href: "kotak",
        },
      ],
      [
        {
          title: "YES BANK",
          href: "yes",
        },
        {
          title: "RBL BANK",
          href: "rbl",
        },
      ],
    ],
  },
  // {
  //   title: "Blog",
  //   className: "blog",
  //   href: "/post",
  //   hasChildren: false,
  // },
  {
    title: "Contact",
    className: "contact-us",
    href: "/contact",
    hasChildren: false,
  },
];
const Navbar = () => {
  const [drawerShow, setDrawerShow] = useState(false);
  const { width: screenWidth } = useWindowSize();
  const handleDrawer = useCallback(() => {
    setDrawerShow((b) => !b);
  }, []);

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
