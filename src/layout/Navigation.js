import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li class="item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li class="item">
          <NavLink to="/feed">Feed</NavLink>
        </li>
        <li class="item">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
