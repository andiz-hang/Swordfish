import "./Banner.css";
import React, { Component } from "react";

class Banner extends Component {
  constructor() {
    super();
    this.state = { searchBarInput: "" };

    this.updateInput = this.updateInput.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  // For the purposes of showing which nav is being selected. eg. if the Home page is selected, underline the Home button
  getNavLinks() {
    const link_names = ["Home", "Info"];
    const links = [];
    for (const page in link_names) {
      if (this.props.page === link_names[page]) {
        links.push(
          <h6
            key={link_names[page]}
            className="nav-text nav-selected"
            onClick={() => this.props.onUpdatePage(link_names[page], "")}
          >
            {link_names[page]}
          </h6>
        );
      } else {
        links.push(
          <h6
            key={link_names[page]}
            className="nav-text"
            onClick={() => this.props.onUpdatePage(link_names[page], "")}
          >
            {link_names[page]}
          </h6>
        );
      }
    }

    return links;
  }

  updateInput(e) {
    this.setState({ searchBarInput: e.target.value });
  }

  onKeyPressed(key) {
    if (key.keyCode === 13) {
      this.props.onUpdatePage("StockInfo", this.state.searchBarInput);
    }
  }

  render() {
    return (
      <header className="Banner">
        <div
          className="banner-pagename"
          onClick={() => this.props.onUpdatePage("Home", "")}
        >
          Swordfish
        </div>
        <input
          className="search-bar"
          type="text"
          placeholder="Enter stock ticker, then click the 'Enter' key"
          onChange={this.updateInput}
          onKeyDown={this.onKeyPressed}
        />
        <ul className="nav-bar">{this.getNavLinks()}</ul>;
      </header>
    );
  }
}

export default Banner;
