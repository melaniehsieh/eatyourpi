import React, { Component } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import pie from "../pie1.png";

class Display extends Component {
  state = {
    articles: [],
  };

  componentWillMount() {
    this.getArticles(this.props.default);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        url: `https://newsapi.org/v2/top-headlines?sources=${nextProps.default}&apiKey=10416b9ae75b46c6be97a928dcde10f0`,
      });
      this.getArticles(nextProps.default);
    }
  }

  formatDate(date) {
    let time = new Date(date);
    let day = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();
    let composedTime = day + "/" + month + "/" + year;
    return composedTime;
  }

  getArticles(url) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=10416b9ae75b46c6be97a928dcde10f0`
      )
      .then((res) => {
        const articles = res.data.articles;

        this.setState({ articles: articles });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="cardsContainer">
        {this.state.articles.map((news, i) => {
          return (
            <div className="card">
              {news.urlToImage ? (
                <Card.Img className="image" src={news.urlToImage} />
              ) : (
                <Card.Img className="image" src={pie} />
              )}
              <Card.Body className="card_body">
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  {news.title}
                </a>
                <p className="desc">{news.description}</p>
                <div className="author">
                  <p>
                    Author: {news.author ? news.author : this.props.default}
                  </p>
                  <p>Published: {this.formatDate(news.publishedAt)}</p>
                </div>
              </Card.Body>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Display;
