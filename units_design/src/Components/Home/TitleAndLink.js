import React from "react";
import { Link } from "react-router-dom";

export default function TitleAndLink({ title, link, destination }) {
  return (
    <div className="row m-3">
      <h3 className="col-lg-11 col-sm-10 fw-bold text-white">{title}</h3>
      <p className="col-lg-1 col-sm-2">
        <Link
          to={destination}
          style={{ color: "#B79763" }}
          className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >
          {link}
        </Link>
      </p>
    </div>
  );
}
