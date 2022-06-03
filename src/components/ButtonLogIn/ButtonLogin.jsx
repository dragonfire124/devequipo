import React from 'react';
import './ButtonLogin.scss';
import { Link } from 'react-router-dom';
export const ButtonLogin = () => {
  return (
    <>
      <Link to="/Login" className="ButtonLogin">
        Log In
      </Link>
    </>
  );
};
