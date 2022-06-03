import React from 'react';
import './ASecondary.scss';

export const ASecondary = ({ text, img }) => {
  return (
    <div className="ASecondary">
      <div className="ASecondary-container">
        <p>{text}</p>
        <img src={img} alt="" width="100%" />
      </div>
    </div>
  );
};
