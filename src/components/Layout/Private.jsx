import React from "react";
import { Outlet } from "react-router-dom";
import PersistLogin from "../../redux/features/auth/PersistLogin";
import Header from "../Header";

const Private = () => {
  return (
    <>
      <Header />
      <PersistLogin>
        <div className="bg-gray-100">
          <Outlet />
        </div>
        <div>Footer</div>
      </PersistLogin>
    </>
  );
};

export default Private;
