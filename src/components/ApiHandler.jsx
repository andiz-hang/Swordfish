function APIString20years(func, ticker) {
  return `https://public-api.quickfs.net/v1/data/${ticker}/${func}?period=FY-19:FY&api_key=84560ad55be389e07b7999dbad32766e3baf7c4a`;
}

// helper functions go in here
const api = {
  getRevenue: async (ticker) => {
    const response = await fetch(APIString20years("revenue", ticker));
    console.log("GET revenue for " + ticker); // DEBUG
    var res = await response.json();

    // get the years of the revenue
    const response2 = await fetch(APIString20years("period_end_date", ticker));
    console.log("GET period_end_date for " + ticker); // DEBUG
    var year = await response2.json();

    res = res["data"];
    year = year["data"];

    // Remove years with no data
    while (year[0] === 0) {
      year.shift(); // Remove the first element of array
      res.shift(); // Remove the first element of array
    }

    // change date from "YYYY-MM" format to "YYYY"
    year = year.map((date) => date.slice(0, 4));

    return {
      year: year,
      revenue: res,
    };
  },

  getRevenueTEST: async (ticker) => {
    const year = [];

    for (var i = 2003; i < 2023; i++) {
      year.push(i);
    }

    const revenue = [];
    if (ticker === "AAPL") {
      for (var i = 1; i < 21; i++) {
        revenue.push(i * 1500000);
      }
    } else {
      for (var i = 1; i < 21; i++) {
        revenue.push(i * 1000000);
      }
    }

    return {
      year: year.map((y) => y.toString()),
      revenue: revenue,
    };
  },
};

export default api;
