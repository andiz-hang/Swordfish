import "./Banner.css";
import React, { Component } from "react";
import { doesCompanyExist } from "./ApiHandler.jsx";

// Error alerts. They are in an object so that the code is more easily collapsible in the text editor
const alerts = {
  alertEmptySearchBar: () =>
    alert("Error: Please type a ticker symbol into the search bar"),
  alertCompanyDoesNotExist: (ticker) =>
    alert(`Error: '${ticker}' does not exist. Please try again.`),
};

class Banner extends Component {
  constructor() {
    super();
    this.state = { searchBarInput: "" };

    // Need to bind these event handlers because they originate from a parent component
    this.updateInput = this.updateInput.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  // For the purposes of showing which nav is being selected. eg. if the Home page is selected, underline and bold the Home button in the NavList
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

  // Handle whenever the search bar is updated
  updateInput(e) {
    this.setState({ searchBarInput: e.target.value });
  }

  // Does two things:
  // 1. Check if ticker is an empty string
  // 2. Check if ticker is a real company
  // Throws an error alert if either are true. Otherwise, update the MainPage
  async searchCompany(ticker) {
    if (ticker === "") {
      alerts.alertEmptySearchBar();
      return;
    }

    const exists = await doesCompanyExist(ticker);

    if (!exists) {
      alerts.alertCompanyDoesNotExist(ticker);
      return;
      // Must be in an 'else' statement, otherwise, will not work due to Promises.
    } else {
      this.props.onUpdatePage("StockInfo", ticker);
    }
  }

  // Check whether the key pressed in the search bar is the "Enter" key. If so, searchCompany
  onKeyPressed(key) {
    if (key.keyCode !== 13) {
      return;
    }

    return this.searchCompany(this.state.searchBarInput);
  }

  render() {
    return (
      <header className="Banner">
        {
          // The name of the app. Clicking on it goes to the Home page.
        }
        <div
          className="banner-pagename"
          onClick={() => this.props.onUpdatePage("Home", "")}
        >
          Swordfish
        </div>
        {
          // The search bar, where users search for companies via their ticker symbol. Clicking "Enter" or the "Search" button searches for the company, or throws an error if the company is empty string or the company ticker symbol doesn't exist.
        }
        <div className="search-bar-area">
          <input
            className="search-bar"
            type="text"
            placeholder="Enter stock ticker, then click 'Search'"
            // Warning: Do not change the two lines below
            onChange={this.updateInput}
            onKeyDown={this.onKeyPressed}
          />
          <button
            className="search-button"
            onClick={() => this.searchCompany(this.state.searchBarInput)}
          >
            Search
          </button>
        </div>
        {
          // The Nav Bar, currently has a Home and Info tab.
        }
        <ul className="nav-bar">{this.getNavLinks()}</ul>;
      </header>
    );
  }
}

export default Banner;
