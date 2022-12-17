import React from "react";

const Loader = () => {
  return (
    <div className="preloader d-flex align-items-center justify-content-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
