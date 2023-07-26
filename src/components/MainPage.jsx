import "./MainPage.css";
import React, { Component } from "react";

import Home from "./main-page-components/Home.jsx";
import StockInfo from "./main-page-components/StockInfo.jsx";

class MainPage extends Component {
  render() {
    if (this.props.stock === "") {
      return <Home />;
    } else {
      return (
        <StockInfo
          onAddStock={this.props.onAddStock}
          stock={this.props.stock}
          CFData={this.props.CFData}
        />
      );
    }
  }
}

export default MainPage;
