import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const logo = "/assets/logo.png";

const Navbar = ({ logout }) => (
  <nav className="dashboard-navbar">
    <div className="dashboard-container">
      <NavLink to="/dashboard" className="logo-link">
        <img src={logo} className="dashboard-logo" alt="logo" />
      </NavLink>
      <div className="logout-link">
        <button type="button" className="logout-btn" onClick={() => logout()}>
          Logout
        </button>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  logout: PropTypes.func.isRequired
};

export default Navbar;
