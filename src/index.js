import React from "react";
import { render } from "react-dom";

class Quote extends React.Component {
  constructor(props) {
    super(props);

    this.quotes = [
      {
        quote: "Frankly, my dear, I don't give a damn.",
        source: "Gone With The Wind - 1939"
      },
      {
        quote: "Here's looking at you, kid.",
        source: "Casablanca - 1942"
      },
      {
        quote: "You're gonna need a bigger boat.",
        source: "Jaws - 1975"
      },
      {
        quote: "May the force be with you.",
        source: "Star Wars - 1977"
      },
      {
        quote: "Toto, I've a feeling we're not in Kansas anymore.",
        source: "The Wizard of Oz - 1939"
      }
    ];

    this.state = this._randomQuote();
    this.shuffle = this.shuffle.bind(this);
  }

  _randomQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

  shuffle() {
    this.setState(this._randomQuote);
  }

  render() {
    return (
      <div>
        <h2>{this.state.quote}</h2>
        <blockquote>{this.state.source}</blockquote>
        <button onClick={this.shuffle}>Next</button>
        <a
          className="twitter-share-button"
          href="https://twitter.com/share"
          data-text="testing"
          data-size="large"
          data-related="freecodecamp"
          data-hashtags="freeCodeCamp,quotes"
        >
          Tweet
        </a>
      </div>
    );
  }
}

render(<Quote />, document.getElementById("root"));
