import React, { Component } from "react";
import axios from "axios";
import "./Outlet.css";
import { findFlag } from "./helpers";

class Outlet extends Component {
  state = {
    data: [],
  };

  componentWillMount() {
    this.getSources();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ value: nextProps.default });
      this.getSources();
    }
  }

  getSources() {
    axios
      .get(
        `https://newsapi.org/v2/sources?language=en&apiKey=10416b9ae75b46c6be97a928dcde10f0`
      )
      .then((res) => {
        this.setState({ data: res.data.sources });
      });
  }

  render() {
    return (
      <div className="outletSection">
        {this.state.data.map((item, y) => {
          if (item.id === this.state.value) {
            return (
              <div key={y} className="singleNew">
                <h4>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </h4>
                <div className="generalInfo">
                  <p>{item.country.toUpperCase()}</p>
                  <img
                    className="flagCode"
                    src={findFlag(item.country)}
                    alt="flag"
                  />
                  <p>
                    {item.category.replace(/\b\w/g, (l) => l.toUpperCase())}
                  </p>
                </div>
                <p>{item.description}</p>
              </div>
            );
          } else {
            return false;
          }
        })}
      </div>
    );
  }
}

export default Outlet;
