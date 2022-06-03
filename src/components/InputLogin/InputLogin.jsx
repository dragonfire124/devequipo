import React from 'react';
import './InputLogin.scss';
export const InputLogin = ({ type, labels }) => {
  return (
    <div className="InputLogin">
      <div className="InputLogin-container">
        <div className="InputLogin-content">
          <p> {labels} </p>
          <input type={type} id={labels} />
        </div>
      </div>
    </div>
  );
};
