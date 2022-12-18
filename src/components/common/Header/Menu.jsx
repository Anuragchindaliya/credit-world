import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { slugify } from "../../../utils";

const Menu = ({ item }) => {
  const { child, type, title } = item;
  const [isOpen, setOpen] = useState(false);
  return (
    <li className={type ? "megamenu-item" : "has-down cn-dropdown-item"}>
      <a
        className={item?.className}
        // style={({ isActive }) =>
        //   isActive ? { color: "#ffbb38" } : undefined
        // }
        style={{cursor:"pointer"}}
        onClick={() => setOpen((b) => !b)}
      >
        {title} {isOpen}
      </a>

      {/* <span className="dd-trigger" /> */}
      {type ? (
        <div
          className="megamenu"
          style={{ display: isOpen ? "block" : "none" }}
        >
          {child?.map((arr, i) => {
            return (
              <ul key={i} className="single-mega cn-col-4">
                {arr.map((cList, ci) => {
                  const { title } = cList;
                  let href = cList?.href;
                  if (!href) {
                    href = slugify(item?.title) + "/" + slugify(`${title}`);
                  }
                  return (
                    <li key={ci}>
                      <NavLink to={href}>{title}</NavLink>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      ) : (
        <ul className="dropdown" style={{ display: isOpen ? "block" : "none" }}>
          {child?.map((cList, ci) => {
            const { title } = cList;
            let href = cList?.href;
            if (!href) {
              href = slugify(item?.title) + "/" + slugify(`${title}`);
            }
            return (
              <li key={ci}>
                <NavLink to={href}>{title}</NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default Menu;
