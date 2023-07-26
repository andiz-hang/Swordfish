import { getAPIData } from "../ApiHandler";

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const dataFuncs = {
  revenueConfigs: (years, data) => {
    const settings = {
      // labels are filled with years in StockInfo.jsx
      labels: years,
      datasets: [
        {
          label: "Revenue (Millions of $)",
          id: 1,
          data: data.map((r) => r / 1000000),
          backgroundColor: "rgba(43, 217, 255)",
        }
      ],
    }
    return settings;
  },

  grossConfigs: (years, data) => {
    const settings = {
      // labels are filled with years in StockInfo.jsx
      labels: years,
      datasets: [
        {
          label: "Profit (Millions of $)",
          id: 1,
          data: data.map((x) => x / 1000000),
          backgroundColor: "rgba(230, 216, 32)",
        }
      ],
    }
    return settings;
  },

  operatingConfigs: (years, data) => {
    const settings = {
      // labels are filled with years in StockInfo.jsx
      labels: years,
      datasets: [
        {
          label: "Profit (Millions of $)",
          id: 1,
          data: data.map((x) => x / 1000000),
          backgroundColor: "rgba(209, 28, 0)",
        }
      ],
    }
    return settings;
  },

  epsConfigs: (years, data) => {
    const settings = {
      // labels are filled with years in StockInfo.jsx
      labels: years,
      datasets: [
        {
          label: "Earnings ($ per share)",
          id: 1,
          data: data,
          backgroundColor: "rgba(250, 180, 67)",
        },
      ],
    }
    return settings;
  },

  dividendsConfigs: (years, data) => {
    const settings = {
      // labels are filled with years in StockInfo.jsx
      labels: years,
      datasets: [
        {
          label: "Dividends ($ per Share)",
          id: 1,
          data: data,
          backgroundColor: "rgba(0, 171, 46)",
        },
      ],
    }
    return settings;
  },

  roicConfigs: (years, data) => {
    const settings = {
      // labels are filled with years in StockInfo.jsx
      labels: years,
      datasets: [
        {
          label: "Return on Invested Capital (%)",
          id: 1,
          data: data.map((x) => x * 100),
          backgroundColor: "rgba(138, 28, 255)",
        },
      ],
    }
    return settings;
  },
};

export async function getData(ticker) {
  return await getAPIData(ticker).then((x) => {
    x["stats"]["price"] = numberWithCommas(x["stats"]["price"]);
    x["stats"]["mktCap"] = numberWithCommas(x["stats"]["mktCap"]);

    return x;
  });
}