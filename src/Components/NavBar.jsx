import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./navbar.css";



const navBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Vehicle Vault
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <NavLink
                className="nav-link"
                to="/BMW"
                activeClassName="active" // Automatically adds 'active' class
                exact
              >
                BMW
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                className="nav-link"
                to="/Merc"
                activeClassName="active"
                exact
              >
                Mercedes
              </NavLink>
            </li>

            <li className="nav-item">
               <NavLink
                className="nav-link"
                to="/Nissan"
                activeClassName="active"
                exact
              >
                Nissan
              </NavLink>
              </li>
              
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navBar;
