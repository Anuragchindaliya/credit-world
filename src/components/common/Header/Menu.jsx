import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = ({ item }) => {
  const { hasChildren, child, type } = item;
  const [isOpen, setOpen] = useState(false);
  return (
    <li className={type ? "megamenu-item" : "has-down cn-dropdown-item"}>
      <NavLink
        className={item?.className}
        // style={({ isActive }) =>
        //   isActive ? { color: "#ffbb38" } : undefined
        // }
        onClick={() => setOpen((b) => !b)}
      >
        {item?.title} {isOpen}
      </NavLink>

      {/* <span className="dd-trigger" /> */}
      {type ? (
        <div
          className="megamenu"
          style={{ display: isOpen ? "block" : "none" }}
        >
          {child?.map((arr, i) => {
            return (
              <ul key={i} className="single-mega cn-col-4">
                {arr.map((item, ci) => {
                  return (
                    <li key={ci}>
                      <NavLink to={item?.href}>{item?.title}</NavLink>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      ) : (
        <ul className="dropdown" style={{ display: isOpen ? "block" : "none" }}>
          {child?.map((ci, i) => {
            return (
              <li key={i}>
                <NavLink to={ci?.href}>{ci?.title}</NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default Menu;
