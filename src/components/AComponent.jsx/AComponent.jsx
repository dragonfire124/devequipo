import React from "react";
import "./AComponent.scss";

export const AComponent = ({ text, icon }) => {
  return (
    <div className="buttonHover col-12 my-2">
      <a href="" className="AComponent rounded text-decoration-none  text-dark">
        <i className={icon}></i>
        {text}
      </a>
    </div>
  );
};
