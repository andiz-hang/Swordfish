function APIString20years(func, ticker) {
  return `https://public-api.quickfs.net/v1/data/${ticker}/${func}?period=FY-19:FY&api_key=84560ad55be389e07b7999dbad32766e3baf7c4a`;
}

// helper functions go in here
const api = {
  getYears: async (ticker) => {
    const response2 = await fetch(APIString20years("period_end_date", ticker));
    console.log("GET period_end_date for " + ticker); // DEBUG
    var year = await response2.json();

    return year["data"];
  },

  getYearsTEST: async (ticker) => {
    const year = [0, 0];
    console.log(`Years (TEST) for ${ticker} stock.`);

    for (var i = 2005; i < 2023; i++) {
      year.push(i);
    }

    return year;
  },

  getRevenue: async (ticker) => {
    const response = await fetch(APIString20years("revenue", ticker));
    console.log("GET revenue for " + ticker); // DEBUG
    var res = await response.json();

    return res["data"];
  },

  getRevenueTEST: async (ticker) => {
    console.log(`Revenue (TEST) for ${ticker} stock.`);

    const revenue = [0, 0];
    if (ticker === "AAPL") {
      for (var i = 3; i < 21; i++) {
        revenue.push(i * 1500000);
      }
    } else {
      for (var i = 3; i < 21; i++) {
        revenue.push(i * 1000000);
      }
    }

    return revenue;
  },

  // WARNING Untested!!!!
  getGrossProfit: async (ticker) => {
    const response = await fetch(APIString20years("gross_profit", ticker));

    var profits = await response.json();
    return profits["data"];
  },

  getGrossProfitTEST: async (ticker) => {
    console.log(`GrossProfits (TEST) for ${ticker}`);

    const profits = [];
    for (var i = 1; i < 21; i++) {
      profits.push(i);
    }
    return profits;
  },

  getGrossProfitTEST: async (ticker) => {
    console.log(`GrossProfits (TEST) for ${ticker}`);

    const profits = [];
    for (var i = 1; i < 21; i++) {
      profits.push(i);
    }
    return profits;
  },
};

export default api;
