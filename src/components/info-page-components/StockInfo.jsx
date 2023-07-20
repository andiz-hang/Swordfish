import React, { Component } from "react";
import { BarChart } from "./charts";
import { revenueConfigs } from "./data";
import api from "../ApiHandler";

class StockInfo extends Component {
  state = {
    yearsData: {},
    isYearsLoading: true,
    revenueData: {},
    isRevenueDataLoading: true,
  };

  updateState() {
    api
      .getYearsTEST(this.props.stock)
      .then((res) => this.setState({ yearsData: res, isYearsLoading: false }));

    api
      .getRevenueTEST(this.props.stock)
      .then((res) =>
        this.setState({ revenueData: res, isRevenueDataLoading: false })
      );
  }

  resetState() {
    this.setState({
      isYearsLoading: true,
      isRevenueDataLoading: true,
    });
  }

  componentDidMount() {
    this.updateState();
  }

  componentDidUpdate(prevProps) {
    // LINE BELOW IS NECESSARY!!!
    if (prevProps.stock !== this.props.stock) {
      this.resetState();
      this.updateState();
    }
  }

  render() {
    if (this.state.isYearsLoading || this.state.isRevenueDataLoading) {
      return <h1>Retrieving Financial Data...</h1>;
    } else {
      return (
        <main className="InfoPage">
          <h1>Current Stock: {this.props.stock}</h1>

          <div className="StatsBar">
            <h1>Current Price: $500000</h1>
            <h1>P/E Ratio: 100</h1>
            <h1>10-Year FCF Growth: $1000</h1>
            <h1>Market Cap: $500m</h1>
            <h1>EPS: 1$</h1>
            <h1>10-Year ROIC: 20%</h1>
          </div>

          <div className="GraphDisplayPanel">
            <div className="ChartContainer">
              <h2 className="ChartLabel">Annual Revenue</h2>
              <BarChart
                id="revenue"
                chartData={revenueConfigs(
                  this.state.yearsData,
                  this.state.revenueData,
                  "Revenue (Millions of $)"
                )}
              />
            </div>
            <div className="ChartContainer">
              <h2 className="ChartLabel">Gross Profit</h2>
              <BarChart
                id="grossProfit"
                chartData={revenueConfigs(
                  this.state.yearsData,
                  this.state.revenueData,
                  "Profit (Millions of $)"
                )}
              />
            </div>
            <div className="ChartContainer">
              <h2 className="ChartLabel">Operating Profit</h2>
              <BarChart
                id="operationalProfit"
                chartData={revenueConfigs(
                  this.state.yearsData,
                  this.state.revenueData,
                  "Profit (Millions of $)"
                )}
              />
            </div>
          </div>

          <div className="DividendBar">
            <div className="ChartContainer">
              <h2 className="ChartLabel">Dividends Per Share</h2>
              <BarChart
                id="dividend"
                chartData={revenueConfigs(
                  this.state.yearsData,
                  this.state.revenueData,
                  "Dividends ($ per Share)"
                )}
              />
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
