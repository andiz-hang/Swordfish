import React, { Component } from "react";
import { TestChart } from "./charts"; //DEBUG
import { BarChart, LineChart } from "./charts";
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
      return <h1>Retrieving Financial Data...</h1>;
    } else {
      return (
        <main className="InfoPage">
          <h1>Current Stock: {this.props.stock}</h1>

          <div className="StatsBar">
            <h1>Current Price: $500000</h1>
            <h1>P/E Ratio: 100</h1>
            <h1>EPS: 1$</h1>
          </div>

          <div className="GraphDisplayPanel">
            <div className="ChartContainer">
              <BarChart id="freeCashFlow" chartData={this.state.chartData} />
            </div>
            <div className="ChartContainer">
              <BarChart id="test1" chartData={this.state.chartData} />
            </div>
            <div className="ChartContainer">
              <LineChart id="test2" chartData={this.state.chartData} />
            </div>
          </div>

          <div className="DividendBar">
            <div className="ChartContainer">
              <BarChart id="freeCashFlow" chartData={this.state.chartData} />
            </div>
            <h1>Current Dividend Yield: 200%</h1>
          </div>

          <button onClick={() => this.props.onAddStock(this.props.stock)}>
            Add Stock to List
          </button>
        </main>
      );
    }
  }
}

export default StockInfo;
