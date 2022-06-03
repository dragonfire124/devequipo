import React from 'react';
import { CrearCuenta } from '../components/CrearCuenta/CrearCuenta';
import { Navbar } from '../components/Navbar/Navbar';

export const Createaccount = () => {
  return (
    <div className="Createaccount">
      <Navbar />
      <CrearCuenta></CrearCuenta>
    </div>
  );
};
