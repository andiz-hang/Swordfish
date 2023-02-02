import "./InfoPage.css";
import React, { Component } from "react";

import Home from "./info-page-components/Home.jsx";
import StockInfo from "./info-page-components/StockInfo.jsx";

class InfoPage extends Component {
  // state = {  }
  render() {
    if (this.props.stock === "") {
      return <Home />;
    }

    return (
      <StockInfo
        onAddStock={this.props.onAddStock()}
        stock={this.props.stock}
      />
    );
  }
}

export default InfoPage;
