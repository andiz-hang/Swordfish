import React, { Component } from "react";
import { BarChart } from "./charts";
import { numberWithCommas, revenueConfigs } from "./data";
import { getAPIData } from "../ApiHandler";

class StockInfo extends Component {
  state = {
    data: {},
    isDataLoading: true,
  };

  updateState() {
    getAPIData(this.props.stock).then((res) =>
      this.setState({ data: res, isDataLoading: false })
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
    if (this.state.isDataLoading) {
      return <h1>Retrieving Financial Data...</h1>;
    } else {
      return (
        <main className="InfoPage">
          <h1>Current Stock: {this.props.stock}</h1>

          <div className="StatsBar">
            <h1>
              Last Close Price: ${numberWithCommas(this.state.data.stats.price)}
            </h1>
            <h1>P/E Ratio: {numberWithCommas(this.state.data.stats.pe)}</h1>
            <h1>Placeholder: </h1>
            <h1>
              Market Cap: ${numberWithCommas(this.state.data.stats.mktCap)}M
            </h1>
            <h1>Placeholder: </h1>
            <h1>Placeholder: </h1>
          </div>

          <div className="GraphDisplayPanel">
            <div className="ChartContainer">
              <h2 className="ChartLabel">Annual Revenue</h2>
              <BarChart
                id="revenue"
                chartData={revenueConfigs(
                  this.state.data.years,
                  this.state.data.revenue,
                  "Revenue (Millions of $)"
                )}
              />
            </div>
            <div className="ChartContainer">
              <h2 className="ChartLabel">Gross Profit</h2>
              <BarChart
                id="grossProfit"
                chartData={revenueConfigs(
                  this.state.data.years,
                  this.state.data.revenue,
                  "Profit (Millions of $)"
                )}
              />
            </div>
            <div className="ChartContainer">
              <h2 className="ChartLabel">Operating Profit</h2>
              <BarChart
                id="operationalProfit"
                chartData={revenueConfigs(
                  this.state.data.years,
                  this.state.data.revenue,
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
                  this.state.data.years,
                  this.state.data.revenue,
                  "Dividends ($ per Share)"
                )}
              />
            </div>
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
