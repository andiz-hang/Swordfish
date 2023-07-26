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

    // DEBUG
    sidebarItems.push(
      <button
        onClick={async () => {
          const res = await fetch(
            "https://public-api.quickfs.net/v1/usage?api_key=84560ad55be389e07b7999dbad32766e3baf7c4a"
          );

          const usage = await res.json();
          alert(
            `Number of API calls remaining today: ${usage["usage"]["quota"]["remaining"]}`
          );
        }}
      >
        Check remaining API Calls (DEBUG)
      </button>
    );

    return <ul className="Sidebar">{sidebarItems}</ul>;
  }
}

export default Sidebar;
