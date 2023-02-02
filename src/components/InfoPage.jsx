import "./InfoPage.css";
import React, { Component } from "react";

class InfoPage extends Component {
  // state = {  }
  render() {
    if (this.props.stock === "") {
      return (
        <main className="InfoPage">
          <h1>Welcome to the Site!</h1>
        </main>
      );
    }

    return (
      <main className="InfoPage">
        <h1>Current Stock: {this.props.stock}</h1>
        <button onClick={() => this.props.onAddStock(this.props.stock)}>
          Add Stock to List
        </button>
      </main>
    );
  }
}

export default InfoPage;
