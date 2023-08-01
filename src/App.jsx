import React, { Component } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";

class App extends Component {
  state = {
    // Sidebar is initially populated by these stocks
    sidebarStocks: ["AAPL", "MSFT", "META", "NVDA", "TSLA", "SHOP:CA"],
    currentStock: "",
    // Home page is loaded by deafult
    currentMainPage: "Home",
  };

  // Used whenever the page is updated. This function is sent to several child components
  handleUpdatePage = (page, ticker) => {
    this.setState({
      currentMainPage: page,
      currentStock: ticker.toUpperCase(),
    });
  };

  // Used whenever a stock is added to the Sidebar.
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
        <Banner
          onUpdatePage={this.handleUpdatePage}
          page={this.state.currentMainPage}
        />
        <Sidebar
          stocks={this.state.sidebarStocks}
          currentStock={this.state.currentStock}
          onUpdatePage={this.handleUpdatePage}
        />
        <MainPage
          stock={this.state.currentStock}
          page={this.state.currentMainPage}
          onAddStock={this.handleAddStock}
          onUpdatePage={this.handleUpdatePage}
        />
      </div>
    );
  }
}

export default App;
