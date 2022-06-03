import React from 'react';
import './BotonesCrearCuenta.scss';

export const BotonesCrearCuenta = ({ id, icon, texto }) => {
  return (
    <button id={id} className="CreateAccountBtn">
      {icon}&nbsp;&nbsp;&nbsp;
      {texto}
    </button>
  );
};
