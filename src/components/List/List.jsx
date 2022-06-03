import React from "react";
import "./List.scss";

export const List = ({ children }) => {
  return (
    <section className="d-flex flex-column align-items-start col-12">
      {children}
    </section>
  );
};
