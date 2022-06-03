import React from "react";
import "./PostAutorName.scss";

export const PostAutorName = ({ name }) => {
  return (
    <button type="button" class="PostAutorName">
      {name}
    </button>
  );
};
