import React from "react";
import "./IconDev.scss";
import { Link } from "react-router-dom";
export const IconDev = () => {
  return (
    <>
      <Link to="/">
        <img
          className="IconDev"
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt=""
        />
      </Link>
    </>
  );
};
