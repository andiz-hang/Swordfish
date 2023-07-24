const formatString = {
  default: (func, ticker) => {
    return `https://public-api.quickfs.net/v1/data/${ticker}/${func}?api_key=84560ad55be389e07b7999dbad32766e3baf7c4a`;
  },

  years20: (func, ticker) => {
    return `https://public-api.quickfs.net/v1/data/${ticker}/${func}?period=FY-19:FY&api_key=84560ad55be389e07b7999dbad32766e3baf7c4a`;
  },

  years10: (func, ticker) => {
    return `https://public-api.quickfs.net/v1/data/${ticker}/${func}?period=FY-9:FY&api_key=84560ad55be389e07b7999dbad32766e3baf7c4a`;
  },
};

// helper functions go in here
const apiFuncs = {
  getStatsTEST: async (ticker) => {
    return {
      price: 1,
      pe: 2,
      fcf: 3,
      mktCap: 4,
      eps: 5,
      roic: 6,
      divYld: 7,
    };
  },

  getYearsTEST: async (ticker) => {
    const year = [0, 0];
    console.log(`Years (TEST) for ${ticker} stock.`);

    for (var i = 2005; i < 2023; i++) {
      year.push(i);
    }

    return year;
  },

  getDataTEST: async (ticker) => {
    console.log(`Revenue (TEST) for ${ticker} stock.`);

    const revenue = [0, 0];
    if (ticker === "AAPL") {
      for (let i = 3; i < 21; i++) {
        revenue.push(i * 1500000);
      }
    } else {
      for (let i = 3; i < 21; i++) {
        revenue.push(i * 1000000);
      }
    }

    return revenue;
  },

  getStats: async (ticker) => {
    const responseName = await fetch(formatString.default("name", ticker));
    const responsePrice = await fetch(formatString.default("price", ticker));
    const responsePE = await fetch(formatString.default("pe", ticker));
    const responseMktCap = await fetch(formatString.default("mkt_cap", ticker));

    console.log("GET 'name' for " + ticker); // DEBUG
    console.log("GET 'price' for " + ticker); // DEBUG
    console.log("GET 'pe' for " + ticker); // DEBUG
    console.log("GET 'mkt_cap' for " + ticker); // DEBUG

    const name = await responseName.json();
    const price = await responsePrice.json();
    const PE = await responsePE.json();
    const MktCap = await responseMktCap.json();

    return {
      name: name["data"],
      price: price["data"],
      pe: PE["data"],
      mktCap: MktCap["data"],
    };
  },

  getYears: async (ticker) => {
    const response2 = await fetch(
      formatString.years20("period_end_date", ticker)
    );
    console.log("GET 'period_end_date' for " + ticker); // DEBUG
    var year = await response2.json();

    return year["data"];
  },

  getRevenue: async (ticker) => {
    const response = await fetch(formatString.years20("revenue", ticker));
    console.log("GET revenue for " + ticker); // DEBUG
    var res = await response.json();

    return res["data"];
  },

  getGrossProfit: async (ticker) => {
    const response = await fetch(formatString.years20("gross_profit", ticker));
    console.log("GET 'gross_profit' for " + ticker); // DEBUG

    var profits = await response.json();
    return profits["data"];
  },

  getOperatingProfit: async (ticker) => {
    const response = await fetch(
      formatString.years20("operating_income", ticker)
    );
    console.log("GET 'operating_income' for " + ticker); // DEBUG

    var profits = await response.json();
    return profits["data"];
  },

  getDividends: async (ticker) => {
    const response = await fetch(formatString.years20("dividends", ticker));
    console.log("GET 'dividends' for " + ticker); // DEBUG

    var dividends = await response.json();
    return dividends["data"];
  },
};

export async function getAPIData(ticker) {
  // const stats = await apiFuncs.getStats(ticker);
  // const years = await apiFuncs.getYears(ticker);
  // const revenue = await apiFuncs.getRevenue(ticker);
  // const gross = await apiFuncs.getGrossProfit(ticker);
  // const operating = await apiFuncs.getOperatingProfit(ticker);
  // const dividends = await apiFuncs.getDividends(ticker);

  const stats = await apiFuncs.getStatsTEST(ticker);
  const years = await apiFuncs.getYearsTEST(ticker);
  const revenue = await apiFuncs.getDataTEST(ticker);
  const gross = await apiFuncs.getDataTEST(ticker);
  const operating = await apiFuncs.getDataTEST(ticker);
  const dividends = await apiFuncs.getDataTEST(ticker);

  return {
    years: years,
    revenue: revenue,
    stats: stats,
    gross: gross.map((x) => x / 1000000),
    operating: operating.map((x) => x / 1000000),
    dividends: dividends,
  };
}
