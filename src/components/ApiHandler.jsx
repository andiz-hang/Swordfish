function APIString(func, ticker) {
  return `https://public-api.quickfs.net/v1/data/${ticker}/${func}?api_key=84560ad55be389e07b7999dbad32766e3baf7c4a`;
}

function APIString20years(func, ticker) {
  return `https://public-api.quickfs.net/v1/data/${ticker}/${func}?period=FY-19:FY&api_key=84560ad55be389e07b7999dbad32766e3baf7c4a`;
}

function APIString10years(func, ticker) {
  return `https://public-api.quickfs.net/v1/data/${ticker}/${func}?period=FY-9:FY&api_key=84560ad55be389e07b7999dbad32766e3baf7c4a`;
}

// helper functions go in here
const apiFuncs = {
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

  // WARNING Untested!!!!
  getGrossProfit: async (ticker) => {
    const response = await fetch(APIString20years("gross_profit", ticker));

    var profits = await response.json();
    return profits["data"];
  },

  getGrossProfit: async (ticker) => {
    const response = await fetch(APIString20years("gross_profit", ticker));

    var profits = await response.json();
    return profits["data"];
  },

  // WARNING Untested!!!!
  getStats: async (ticker) => {
    const responsePrice = await fetch(APIString("price", ticker));
    const responsePE = await fetch(APIString("pe", ticker));
    // const responseFCF = await fetch(APIString10years("fcf_growth", ticker));
    const responseMktCap = await fetch(APIString("mkt_cap", ticker));
    // const responseEPS = await fetch(APIString("eps_diluted", ticker));
    // const responseROIC = await fetch(APIString10years("roic", ticker));
    // const responseDivs = await fetch(APIString("dividends", ticker));

    const price = await responsePrice.json();
    const PE = await responsePE.json();
    // const FCF = await responseFCF.json();
    const MktCap = await responseMktCap.json();
    // const EPS = await responseEPS.json();
    // const ROIC = await responseROIC.json();
    // const Divs = await responseDivs.json();

    return {
      price: price["data"],
      pe: PE["data"],
      // fcf: FCF["data"],
      mktCap: MktCap["data"],
      // eps: EPS["data"],
      // roic: ROIC["data"],
      // divYld: (Divs["data"] / price["data"]) * 100,
    };
  },

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
};

export async function getAPIData(ticker) {
  const years = await apiFuncs.getYearsTEST(ticker);
  const revenue = await apiFuncs.getRevenueTEST(ticker);
  const stats = await apiFuncs.getStatsTEST(ticker);

  return {
    years: years,
    revenue: revenue,
    stats: stats,
  };
}
