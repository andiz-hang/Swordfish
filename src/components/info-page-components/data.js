const dataFuncs = {
  numberWithCommas: (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  revenueConfigs: (years, data) => {
    const settings = {
      // labels are filled with years in StockInfo.jsx
      labels: years,
      datasets: [
        {
          label: "Revenue (Millions of $)",
          id: 1,
          data: data.map((r) => r / 1000000),
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
          data: data,
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
          data: data,
        }
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
        }
      ],
    }
    return settings;
  },
};

export default dataFuncs;