import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";

import Display from "./Display.js";
import Outlet from "./Outlet.js";
import "./Display.css";
import "./Outlet.css";

class Search extends Component {
  state = {
    data: [],
    value: "bbc-news",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  componentWillMount() {
    axios
      .get(
        "https://newsapi.org/v2/sources?language=en&pageSize=20&apiKey=10416b9ae75b46c6be97a928dcde10f0"
      )
      .then((res) => {
        this.setState({ data: res.data.sources });
      });
  }

  render() {
    return (
      <div className="news">
        <h1>
          select a <span>news source</span>
        </h1>
        <select value={this.state.value} onChange={this.handleChange}>
          >
          {this.state.data.map((outlet, i) => {
            return (
              <option key={i} value={outlet.id}>
                {outlet.name}
              </option>
            );
          })}
        </select>
        <Row>
          <Outlet sm={4} default={this.state.value} />
          <Display sm={8} default={this.state.value} />
        </Row>
      </div>
    );
  }
}

export default Search;
