import React from "react";

export const ButtonGeneral = ({ text }) => {
  return (
    <>
      <button type="button" class="btn btn-link">
        {text}
      </button>
    </>
  );
};
