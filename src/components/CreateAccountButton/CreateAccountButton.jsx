import React from 'react';
import './CreateAccountButton.scss';
import { Link } from 'react-router-dom';

export const CreateAccountButton = () => {
  return (
    <Link to="/createaccount">
      <button className="CreateAccountButton">Create account</button>
    </Link>
  );
};
