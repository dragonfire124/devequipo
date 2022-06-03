import React from "react";
import { ButtonLogin } from "../ButtonLogIn/ButtonLogin";
import { IconDev } from "../IconDev/IconDev";
import { InputSearch } from "../InputSearch/InputSearch";
import { SearchIcon } from "../SearchIcon/SearchIcon";
import { CreateAccountButton } from "../CreateAccountButton/CreateAccountButton";
import { AppContext } from "../../Context/AppContext";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  const Context = React.useContext(AppContext);

  return (
    <section className="d-flex p-2 my-2 mx-2 justify-content-around bg-white sticky-top">
      <article className="d-flex">
        <IconDev />
        <div class="wrap">
          <div className="search">
            <InputSearch />
            <SearchIcon />
          </div>
        </div>
      </article>
      <article>
        {Context.user.userID === "" ? (
          <></>
        ) : (
          <Link className="btn btn-outline-primary" to="/createpost">
            Create Post
          </Link>
        )}
        {Context.user.userID === "" ? (
          <ButtonLogin />
        ) : (
          <Link to="/">
            <i class="bi bi-bell fs-3 mx-2"></i>
          </Link>
        )}
        {Context.user.userID === "" ? (
          <CreateAccountButton />
        ) : (
          <Link to={`/account/${Context.user.userID}`}>
            <i class="bi bi-person-circle fs-3"></i>
          </Link>
        )}
      </article>
    </section>
  );
};
