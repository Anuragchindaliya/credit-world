import React from "react";
import { Outlet } from "react-router-dom";
import PersistLogin from "../../redux/features/auth/PersistLogin";
import Header from "../Header";

const Private = () => {
  return (
    <>
      <Header />
      <PersistLogin />
          {/* <Outlet /> */}
        {/* <div>Footer</div> */}
    </>
  );
};

export default Private;
