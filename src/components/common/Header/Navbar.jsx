import React, { useCallback, useEffect, useMemo, useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
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
    href: "/",
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
                      const { hasChildren, child } = item;
                      return (
                        <li key={i} className={hasChildren ? "has-down cn-dropdown-item" : ""}>
                          <a className={item?.className} href="index">
                            {item?.title}
                          </a>
                          {hasChildren && (
                            <ul className="dropdown">
                              {child?.map((ci,i) => {
                                return (
                                  <li key={i}>
                                    <a href={ci?.href}>{ci?.title}</a>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                    {/* <li><a href="#">Pages</a> </li> */}
                    <li className="megamenu-item">
                      <a className="bank-list" href="#">
                        Bank list
                      </a>
                      <div className="megamenu">
                        <ul className="single-mega cn-col-4">
                          <li>
                            <a href="hdfc">HDFC BANK</a>
                          </li>
                          <li>
                            <a href="sbi">SBI BANK</a>
                          </li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                          <li>
                            <a href="icici">ICICI BANK</a>
                          </li>
                          <li>
                            <a href="bob">BANK OF BARODA</a>
                          </li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                          <li>
                            <a href="indus">INDUSIND BANK</a>
                          </li>
                          <li>
                            <a href="kotak">KOTAK MAHINDRA BANK</a>
                          </li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                          <li>
                            <a href="yes">YES BANK</a>
                          </li>
                          <li>
                            <a href="">RBL BANK</a>
                          </li>
                        </ul>
                      </div>
                      <span className="dd-trigger" />
                    </li>
                    <li>
                      <a className="blog" href="post">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="contact-us" href="contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Nav End */}
              </div>
              {/* Contact */}
              <div className="contact">
                <a href="tel:+91-9654069069">
                  <img src="assets/img/core-img/call2.png" alt="" />
                  +91-9654069069
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
