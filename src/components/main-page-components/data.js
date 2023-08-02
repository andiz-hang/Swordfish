import { getAPIData } from "../ApiHandler";
import { dataConfigs } from "./charts";

// This is where all the background calculations and chart data formatting is made. 

// Returns num, but with all the thousands separator commas in place.
function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


// Object with the chart configs for each metric
export const dataFuncs = {
  revenueConfigs: (years, data) => {
    return dataConfigs("Annual Revenue (Millions of $)", years, data.map((r) => r / 1000000), "rgba(43, 217, 255)", true);
  },

  grossConfigs: (years, data) => {
    return dataConfigs("Profit (Millions of $)", years, data.map((r) => r / 1000000), "rgba(230, 216, 32)", true);
  },

  operatingConfigs: (years, data) => {
    return dataConfigs("Profit (Millions of $)", years, data.map((r) => r / 1000000), "rgba(209, 28, 0)", true);
  },

  epsConfigs: (years, data) => {
    return dataConfigs("Earnings ($ per share)", years, data, "rgba(250, 180, 67)", true, 2);
  },

  dividendsConfigs: (years, data) => {
    return dataConfigs("Dividends ($ per Share)", years, data, "rgba(0, 171, 46)", true, 2);
  },

  roicConfigs: (years, data) => {
    return dataConfigs("Return on Invested Capital (%)", years, data.map((x) => x * 100), "rgba(138, 28, 255)", false, 2, true);
  },
};

// Get the data, but format the price and market cap to be with thousands separators
export async function getData(ticker) {
  return await getAPIData(ticker).then((x) => {
    x["stats"]["price"] = numberWithCommas(x["stats"]["price"]);
    x["stats"]["mktCap"] = numberWithCommas(x["stats"]["mktCap"]);

    return x;
  });
}