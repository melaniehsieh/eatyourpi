import React, { Component } from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="box">
        <div className="input">
          <h3>Title</h3>
          <input
            type="text"
            className="input_value"
            placeholder="Enter a title…"
            name="title"
          />
        </div>
        <div className="input">
          <h3>Tags</h3>
          <input
            type="text"
            className="input_value"
            placeholder="Enter tags…"
            name="tags"
          />
          <button className="add">+</button>
        </div>
        <button className="search">Search</button>
      </div>
    );
  }
}

export default Home;
