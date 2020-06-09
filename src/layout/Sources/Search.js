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
    country: "",
    category: "",
    value: "bbc-news",
  };

  handleChange = (event) => {
    this.setState({ country: event.target.value });
    this.setState({ category: event.target.value });
    this.setState({ value: event.target.value });
  };

  componentWillMount() {
    axios
      .get(
        "https://newsapi.org/v2/sources?language=en&apiKey=10416b9ae75b46c6be97a928dcde10f0"
      )
      .then((res) => {
        this.setState({ data: res.data.sources });
      });
  }

  render() {
    const countryList = [
      "ae",
      "ar",
      "at",
      "au",
      "be",
      "bg",
      "br",
      "ca",
      "ch",
      "cn",
      "co",
      "cu",
      "cz",
      "de",
      "eg",
      "fr",
      "gb",
      "gr",
      "hk",
      "hu",
      "id",
      "ie",
      "il",
      "in",
      "it",
      "jp",
      "kr",
      "lt",
      "lv",
      "ma",
      "mx",
      "my",
      "ng",
      "nl",
      "no",
      "nz",
      "ph",
      "pl",
      "pt",
      "ro",
      "rs",
      "ru",
      "sa",
      "se",
      "sg",
      "si",
      "sk",
      "th",
      "tr",
      "tw",
      "ua",
      "us",
      "ve",
      "za",
    ];
    const categoryList = [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ];
    return (
      <div className="news">
        <select value={this.state.country} onChange={this.handleChange}>
          >
          {countryList.map((outlet, i) => {
            return (
              <option key={i} value={outlet}>
                {outlet}
              </option>
            );
          })}
        </select>
        <select value={this.state.category} onChange={this.handleChange}>
          >
          {categoryList.map((outlet, i) => {
            return (
              <option key={i} value={outlet}>
                {outlet}
              </option>
            );
          })}
        </select>
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
