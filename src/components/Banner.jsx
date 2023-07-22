import "./Banner.css";
import React, { Component } from "react";

class Banner extends Component {
  constructor() {
    super();
    this.state = { searchBarInput: "" };

    this.updateInput = this.updateInput.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  updateInput(e) {
    this.setState({ searchBarInput: e.target.value });
  }

  onKeyPressed(key) {
    console.log(key);
    if (key.keyCode === 13) {
      this.props.onUpdateStock(this.state.searchBarInput);
    }
  }

  render() {
    return (
      <header className="Banner">
        <div
          className="banner-pagename"
          onClick={() => this.props.onUpdateStock("")}
        >
          A Good App Name
        </div>

        <input
          className="search-bar"
          type="text"
          placeholder="Enter Stock Ticker, ex: AAPL"
          onChange={this.updateInput}
          onKeyDown={this.onKeyPressed}
        />

        <button
          onClick={async () => {
            const res = await fetch(
              "https://public-api.quickfs.net/v1/usage?api_key=84560ad55be389e07b7999dbad32766e3baf7c4a"
            );

            const usage = await res.json();
            alert(
              `Number of API Calls Remaining: ${usage["usage"]["quota"]["remaining"]}`
            );
          }}
        >
          Check remaining API Calls (DEBUG)
        </button>
      </header>
    );
  }
}

export default Banner;
