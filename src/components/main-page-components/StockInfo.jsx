import React, { Component } from "react";
import { BarChart, LineChart } from "./charts";
import { dataFuncs, getData } from "./data";

class StockInfo extends Component {
  state = {
    data: {},
    isDataLoading: true,
  };

  updateState() {
    getData(this.props.stock).then((res) => {
      if (res.hasOwnProperty("error")) {
        this.props.onUpdatePage("Error", "");
      }

      this.setState({ data: res, isDataLoading: false });
    });
  }

  resetState() {
    this.setState({
      isDataLoading: true,
    });
  }

  // Returns empty BarChart if there is no data
  // ie. Bank stocks that have no Gross or Operating Profits
  checkNoData(data, configs, chart_title) {
    if (data === "-") {
      return <div className="ChartContainer" />;
    } else {
      return (
        <div className="ChartContainer">
          <h2 className={"ChartLabel"}>{chart_title}</h2>
          <BarChart
            id="operationalProfit"
            chartData={configs(
              this.state.data.years,
              this.state.data.operating
            )}
          />
        </div>
      );
    }
  }

  checkCompanyExists() {}

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
      return (
        <main className="MainPage">
          <h1>Retrieving Financial Data...</h1>
        </main>
      );
    } else {
      return (
        <main className="MainPage">
          <h1 className="company-name">{this.state.data.stats.name}</h1>

          <div className="StatsBar">
            <h2>Last Close Price: ${this.state.data.stats.price}</h2>
            <h2>P/E Ratio: {this.state.data.stats.pe}</h2>
            <h2>P/B Ratio: {this.state.data.stats.pb}</h2>
            <h2>Market Cap: ${this.state.data.stats.mktCap}M</h2>
            <h2>P/EG Ratio: {this.state.data.stats.peg}</h2>
            <h2>Beta: {this.state.data.stats.beta}</h2>
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
            {this.checkNoData(
              this.state.data.gross,
              dataFuncs.grossConfigs,
              "Gross Profits"
            )}
            {this.checkNoData(
              this.state.data.operating,
              dataFuncs.operatingConfigs,
              "Operating Profit"
            )}
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
              <LineChart
                id="dividend"
                chartData={dataFuncs.roicConfigs(
                  this.state.data.years,
                  this.state.data.roic
                )}
              />
            </div>
          </div>

          <button
            className="add-to-list-button"
            onClick={() => this.props.onAddStock(this.props.stock)}
          >
            Add to Common Stocks List
          </button>
        </main>
      );
    }
  }
}

export default StockInfo;
