import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow navbar-expand-lg py-3 navbar-dark bg-dark">
      <Link to="/" className="navbar-brand ml-5">
        Simple React Project (Blog) & Using Firebase .. MICHAEL
      </Link>
      <ul className="navbar-nav ml-auto mr-5">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/posts" className="nav-link">
          Posts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/admin/Register" className="nav-link">
          Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/admin/Login" className="nav-link">
          Login
          </NavLink>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
