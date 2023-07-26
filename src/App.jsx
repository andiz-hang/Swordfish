import React, { Component } from "react";

import "./App.css";

import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
// import ApiHandler from "./components/ApiHandler";
import MainPage from "./components/MainPage";

class App extends Component {
  state = {
    sidebarStocks: ["AAPL", "TSLA"],
    currentStock: "",
    currentMainPage: "Home",
  };

  handleUpdatePage = (page, ticker) => {
    this.setState({
      currentMainPage: page,
      currentStock: ticker.toUpperCase(),
    });
  };

  handleAddStock = (ticker) => {
    const currentStocks = this.state.sidebarStocks;
    if (currentStocks.includes(ticker)) {
      return;
    }

    let stocks = currentStocks;
    stocks.push(ticker);
    this.setState({ sidebarStocks: stocks });
  };

  render() {
    return (
      <div className="App">
        <Banner onUpdatePage={this.handleUpdatePage} />
        <Sidebar
          stocks={this.state.sidebarStocks}
          currentStock={this.state.currentStock}
          onUpdatePage={this.handleUpdatePage}
        />
        <MainPage
          stock={this.state.currentStock}
          page={this.state.currentMainPage}
          onAddStock={this.handleAddStock}
        />
      </div>
    );
  }
}

export default App;
