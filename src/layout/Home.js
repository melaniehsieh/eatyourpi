import React, { Component } from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="input">
          <input
            type="text"
            className="input_value"
            placeholder="Title:"
            name="title"
          />
        </div>
        <div className="input input_bar">
          <input
            type="text"
            className="input_group"
            placeholder="Tags:"
            name="tags"
          />
          <button className="add">+</button>
        </div>
        <button>Search</button>
      </div>
    );
  }
}

export default Home;
