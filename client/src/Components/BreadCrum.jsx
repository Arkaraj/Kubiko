import React from "react";
import { Link } from "react-router-dom";

const BreadCrum = ({ path }) => {
  return (
    <section className="w3l-skill-breadcrum">
      <div className="breadcrum">
        <div className="container">
          <p>
            <Link to="/">Home</Link>{" "}
            {path.length > 0
              ? path.map((route) => <>&nbsp; / &nbsp; {route}</>)
              : null}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BreadCrum;
