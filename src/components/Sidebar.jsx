import "./Sidebar.css";
import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    const sidebarItems = [
      <li key="header" className="sidebar-header">
        <span>Stocks</span>
      </li>,
    ];

    const stocks = this.props.stocks;

    for (let i in stocks) {
      const stockName = stocks[i];
      if (stockName === this.props.currentStock) {
        sidebarItems.push(
          <li
            key={stockName}
            className="sidebar-item selected"
            onClick={() => this.props.onUpdateStock(stockName)}
          >
            <span>{stockName}</span>
          </li>
        );
      } else {
        sidebarItems.push(
          <li
            key={stockName}
            className="sidebar-item"
            onClick={() => this.props.onUpdateStock(stockName)}
          >
            <span>{stockName}</span>
          </li>
        );
      }
    }

    return <ul className="Sidebar">{sidebarItems}</ul>;
  }
}

export default Sidebar;
