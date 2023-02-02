import React, { Component } from "react";

import "./App.css";

import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import InfoPage from "./components/InfoPage";
import ApiHandler from "./components/ApiHandler";

class App extends Component {
  state = {
    sidebarStocks: ["AAPL", "TSLA"],
    currentStock: "",
  };

  handleUpdateStock = async (ticker) => {
    const api = new ApiHandler();
    var symbol = ticker.toUpperCase();

    const res = await api.getStockData(symbol);
    console.log(res); // DEBUG

    this.setState({ currentStock: symbol });
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
        <InfoPage
          stock={this.state.currentStock}
          onAddStock={this.handleAddStock}
        />
      </div>
    );
  }
}

export default App;
