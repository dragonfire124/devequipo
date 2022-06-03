import React from "react";

export const Cards = ({ children }) => {
  return (
    <section className="d-flex align-items-center flex-column col-12 bg-white">
      {children}
    </section>
  );
};
