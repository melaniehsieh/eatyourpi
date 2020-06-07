import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          <b>
            eatyourpi is made with ❤️ by Melanie Hsieh, a 16 year old developer
            from Hong Kong.
          </b>
        </p>
        <p>© Melanie Hsieh 2020. All rights reserved.</p>
        <div className="social">
          <a
            href="https://twitter.com/melaniehsieh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-2x fa-twitter" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/melaniehsieh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-2x fa-github" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
