import React, { Component } from "react";
import { TestChart } from "./charts"; //DEBUG
import { BarChart, LineChart } from "./charts";
import { getFCF, revenue } from "./data";

class StockInfo extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    testData: {},
    revenueData: {},

    isRevenueDataLoading: true,
  };

  componentDidMount() {
    revenue(this.props.stock).then((res) =>
      this.setState({ revenueData: res, isRevenueDataLoading: false })
    );
  }

  componentDidUpdate() {
    this.setState({
      isRevenueDataLoading: true,
    });

    revenue(this.props.stock).then((res) =>
      this.setState({ revenueData: res, isRevenueDataLoading: false })
    );
  }

  render() {
    if (this.state.isRevenueDataLoading) {
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
              <BarChart id="freeCashFlow" chartData={this.state.revenueData} />
            </div>
            <div className="ChartContainer">
              <BarChart id="test1" chartData={this.state.revenueData} />
            </div>
            <div className="ChartContainer">
              <LineChart id="test2" chartData={this.state.revenueData} />
            </div>
          </div>

          <div className="DividendBar">
            <div className="ChartContainer">
              <BarChart id="freeCashFlow" chartData={this.state.revenueData} />
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
