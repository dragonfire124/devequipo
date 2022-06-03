import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Log.scss";
import { BotonesAccount } from "../BotonesAccount/BotonesAccount";
import { InputLogin } from "../InputLogin/InputLogin";
import { BotonesCrearCuenta } from "../BotonesCrearCuenta/BotonesCrearCuenta";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

export const Log = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();
  const Context = useContext(AppContext);

  const handleUser = (e) => {
    e.preventDefault();
    const userlogin = fetch("https://devtoclon.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    userlogin
      .then((res) => res.json())
      .then((body) => {
        console.log(body.success);
        if (body.success === true) {
          localStorage.setItem(body.id, body.payload);
          navigate("/");
          Context.setUserId(body.id);
        }
      });
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <div className="Login-content">
          <p id="CreateATitle">Welcome to DEv community </p>
          <p>
            {" "}
            <Link to="/"> DEV Community</Link> is a community of 846,223 amazing
            developers{" "}
          </p>
          <br />
          <BotonesAccount />
          <p className="passwordtext">
            Have a password? Continue with your email adress
          </p>
          <label>Email</label>
          <input
            type="text"
            id="Email"
            onChange={({ target }) => {
              setUser({
                ...user,
                email: target.value,
              });
            }}
          />

          <label>Password</label>
          <input
            type="password"
            id="Password"
            onChange={({ target }) => {
              setUser({
                ...user,
                password: target.value,
              });
            }}
          />

          <input type="checkbox" />
          <label>&nbsp;Remember me</label>
          <button className="btn btn-primary mx-3" onClick={handleUser}>
            Continue
          </button>
          <p className="passwordtext">I forgot my password</p>
        </div>
      </div>
    </div>
  );
};
