import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand title" href="#">
        Todo Tracker
      </span>
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
        <div className="navbar-nav">
          <span className="nav-item nav-link" href="#">
            <Link to="/">Main</Link>
          </span>
          <span className="nav-item nav-link" href="#">
            <Link to="/new">New</Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
