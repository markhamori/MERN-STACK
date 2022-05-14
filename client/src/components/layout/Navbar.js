import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import Logo from "../../img/icon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAddressCard,
  faNewspaper,
  faArrowRightToBracket,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          Developers
          <FontAwesomeIcon className="mx-2" icon={faUser} />
        </Link>
      </li>
      <li>
        <Link to="/posts">
          Posts
          <FontAwesomeIcon className="mx-2" icon={faNewspaper} />
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <span className="hide-sm">Dashboard</span>
          <FontAwesomeIcon className="mx-2" icon={faAddressCard} />
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <span className="hide-sm">Logout</span>
          <FontAwesomeIcon className="mx-2" icon={faArrowRightToBracket} />
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          Developers
          <FontAwesomeIcon className="mx-2" icon={faUser} />
        </Link>
      </li>
      <li>
        <Link to="/register">
          Register
          <FontAwesomeIcon className="mx-2" icon={faUserAstronaut} />
        </Link>
      </li>
      <li>
        <Link to="/login">
          Login
          <FontAwesomeIcon className="mx-2" icon={faArrowRightToBracket} />
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-navbar">
      <h1>
        <Link to="/">
          <img className="image" src={Logo} alt="logo" /> DEVZOR
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
