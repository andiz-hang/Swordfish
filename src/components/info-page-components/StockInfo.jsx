import React, { Component } from "react";
import { BarChart } from "./charts";
import { dataFuncs, getData } from "./data";

class StockInfo extends Component {
  state = {
    data: {},
    isDataLoading: true,
  };

  updateState() {
    getData(this.props.stock).then((res) => {
      this.setState({ data: res, isDataLoading: false });
    });
  }

  resetState() {
    this.setState({
      isDataLoading: true,
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
          <h1>{this.state.data.stats.name}</h1>

          <div className="StatsBar">
            <h1>Last Close Price: ${this.state.data.stats.price}</h1>
            <h1>P/E Ratio: {this.state.data.stats.pe}</h1>
            <h1>P/B Ratio: {this.state.data.stats.pb}</h1>
            <h1>Market Cap: ${this.state.data.stats.mktCap}M</h1>
            <h1>P/EG Ratio: {this.state.data.stats.peg}</h1>
            <h1>Beta: {this.state.data.stats.beta}</h1>
          </div>

          <div className="GraphDisplayPanel">
            <div className="ChartContainer">
              <h2 className="ChartLabel">Annual Revenue</h2>
              <BarChart
                id="revenue"
                chartData={dataFuncs.revenueConfigs(
                  this.state.data.years,
                  this.state.data.revenue
                )}
              />
            </div>
            <div className="ChartContainer">
              <h2 className="ChartLabel">Gross Profit</h2>
              <BarChart
                id="grossProfit"
                chartData={dataFuncs.grossConfigs(
                  this.state.data.years,
                  this.state.data.gross
                )}
              />
            </div>
            <div className="ChartContainer">
              <h2 className="ChartLabel">Operating Profit</h2>
              <BarChart
                id="operationalProfit"
                chartData={dataFuncs.operatingConfigs(
                  this.state.data.years,
                  this.state.data.operating
                )}
              />
            </div>
            <div className="ChartContainer">
              <h2 className="ChartLabel">EPS</h2>
              <BarChart
                id="dividend"
                chartData={dataFuncs.epsConfigs(
                  this.state.data.years,
                  this.state.data.eps
                )}
              />
            </div>
            <div className="ChartContainer">
              <h2 className="ChartLabel">Dividends Per Share</h2>
              <BarChart
                id="dividend"
                chartData={dataFuncs.dividendsConfigs(
                  this.state.data.years,
                  this.state.data.dividends
                )}
              />
            </div>
            <div className="ChartContainer">
              <h2 className="ChartLabel">Annual ROIC</h2>
              <BarChart
                id="dividend"
                chartData={dataFuncs.roicConfigs(
                  this.state.data.years,
                  this.state.data.roic
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
