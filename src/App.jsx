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
  };

  handleUpdateStock = (ticker) => {
    this.setState({ currentStock: ticker.toUpperCase() });
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
        <Banner onUpdateStock={this.handleUpdateStock} />
        <Sidebar
          stocks={this.state.sidebarStocks}
          onUpdateStock={this.handleUpdateStock}
          currentStock={this.state.currentStock}
        />
        <MainPage
          stock={this.state.currentStock}
          onAddStock={this.handleAddStock}
        />
      </div>
    );
  }
}

export default App;
