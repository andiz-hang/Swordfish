import "./MainPage.css";
import React, { Component } from "react";

import Home from "./main-page-components/Home.jsx";
import Info from "./main-page-components/Info.jsx";
import StockInfo from "./main-page-components/StockInfo.jsx";

// Display a different page depending on the ui buttons pressed
class MainPage extends Component {
  render() {
    if (this.props.page === "StockInfo") {
      return (
        <StockInfo
          onAddStock={this.props.onAddStock}
          onUpdatePage={this.props.onUpdatePage}
          stock={this.props.stock}
          CFData={this.props.CFData}
        />
      );
    } else if (this.props.page === "Info") {
      return <Info />;
    } else {
      // if (this.props.page) is some weird unexpected value, default to the Home Page
      return <Home onUpdatePage={this.props.onUpdatePage} />;
    }
  }
}

export default MainPage;
