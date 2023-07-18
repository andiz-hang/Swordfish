import React, { Component } from "react";
import { TestChart } from "./charts"; //DEBUG
import { BarChart } from "./charts";
import { getFCF } from "./data";

class StockInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    getFCF(this.props.stock).then((res) =>
      this.setState({ chartData: res, isLoading: false })
    );
  }

  render() {
    if (this.state.isLoading) {
      return null;
    } else {
      return (
        <main className="InfoPage">
          <h1>Current Stock: {this.props.stock}</h1>
          <BarChart id="freeCashFlow" chartData={this.state.chartData} />
          <button onClick={() => this.props.onAddStock(this.props.stock)}>
            Add Stock to List
          </button>
        </main>
      );
    }
  }
}

export default StockInfo;
