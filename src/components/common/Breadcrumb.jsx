import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  const { pathname } = useLocation();
  const pathnames = pathname?.split("/")?.filter(Boolean);
  const active = pathnames?.length - 1;

  return (
    <section
      className="breadcrumb-area bg-img bg-overlay jarallax"
      style={{ backgroundImage: "url(assets/img/bg-img/13.jpg)" }}
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2>{title}</h2>
              <nav aria-label="breadcrumb">
                <ol
                  className="breadcrumb"
                  style={{ textTransform: "capitalize" }}
                >
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  {pathnames.map((name, i) => {
                    const routeTo = `/${pathnames.slice(0, i + 1).join("/")}`;
                    const isActive = active === i;
                    return (
                      <li
                        key={name}
                        className={`breadcrumb-item  ${
                          isActive ? "active" : ""
                        }`}
                        // aria-current="page"
                      >
                        {isActive ? name : <Link to={routeTo}>{name}</Link>}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
