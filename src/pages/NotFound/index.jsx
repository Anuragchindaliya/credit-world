import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="error-actions">
              <Link to="/" className="btn btn-primary btn-lg">
                <span className="glyphicon glyphicon-home fa fa-home pr-2" />
                Take Me Home
              </Link>
              {/* <a href="tel:+91-7217667147" className="btn btn-default btn-lg">
                <span className="glyphicon glyphicon-envelope" />
                Contact Support
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
