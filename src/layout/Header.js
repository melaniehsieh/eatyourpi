import React, { Component } from "react";
import "./Header.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" width="80px" height="80px" />
          <h1>eatyourpi</h1>
        </div>
      </Link>
    );
  }
}

export default Header;
