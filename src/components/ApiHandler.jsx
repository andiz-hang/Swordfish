const formatString = {
  default: (func, ticker) => {
    return `https://public-api.quickfs.net/v1/data/${ticker}/${func}?api_key=84560ad55be389e07b7999dbad32766e3baf7c4a`;
  },

  years20: (func, ticker) => {
    return `https://public-api.quickfs.net/v1/data/${ticker}/${func}?period=FY-19:FY&api_key=84560ad55be389e07b7999dbad32766e3baf7c4a`;
  },
};

// Look for empty data
async function checkForErrorStatus(res) {
  const json = await res.json();

  if (json.hasOwnProperty("errors")) {
    return "-";
  } else {
    return json["data"];
  }
}

export async function doesCompanyExist(ticker) {
  const responseName = await fetch(formatString.default("name", ticker));
  const res = await responseName.json();

  if (res.hasOwnProperty("errors")) {
    return false;
  } else {
    return true;
  }
}

// helper functions go in here
const apiFuncs = {
  getStatsTEST: async (ticker) => {
    if (ticker === "AAPL") {
      return {
        name: "Apple Inc",
        price: 1000,
        pe: 2.1,
        pb: 3.0,
        mktCap: 4000,
        peg: 6,
        beta: 7,
      };
    } else {
      return {
        name: "Company",
        price: 2000,
        pe: 7.1,
        pb: 6.0,
        mktCap: 5000,
        peg: 4,
        beta: 3,
      };
    }
  },

  getYearsTEST: async (ticker) => {
    const year = [0, 0];
    for (var i = 2005; i < 2023; i++) {
      year.push(i);
    }
    return year;
  },

  getDataTEST: async (ticker) => {
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

  getROICTEST: async (ticker) => {
    const roic = [];
    for (let i = 1; i < 21; i++) {
      roic.push(i / 12);
    }
    return roic;
  },

  getStats: async (ticker) => {
    const responseName = await fetch(formatString.default("name", ticker));
    const responsePrice = await fetch(formatString.default("price", ticker));
    const responsePE = await fetch(formatString.default("pe", ticker));
    const responsePB = await fetch(formatString.default("pb", ticker));
    const responseMktCap = await fetch(formatString.default("mkt_cap", ticker));
    const responsePEG = await fetch(formatString.default("peg", ticker));
    const responseBETA = await fetch(formatString.default("beta", ticker));

    var name = await checkForErrorStatus(responseName);
    var price = await checkForErrorStatus(responsePrice);
    var PE = await checkForErrorStatus(responsePE);
    var PB = await checkForErrorStatus(responsePB);
    var MktCap = await checkForErrorStatus(responseMktCap);
    var PEG = await checkForErrorStatus(responsePEG);
    var beta = await checkForErrorStatus(responseBETA);

    return {
      name: name,
      price: price,
      pe: PE,
      pb: PB,
      mktCap: MktCap,
      peg: PEG,
      beta: beta,
    };
  },

  getYears: async (ticker) => {
    const response2 = await fetch(
      formatString.years20("period_end_date", ticker)
    );
    var year = await response2.json();
    return year["data"];
  },

  getRevenue: async (ticker) => {
    const response = await fetch(formatString.years20("revenue", ticker));
    var res = await response.json();
    return res["data"];
  },

  getGrossProfit: async (ticker) => {
    const response = await fetch(formatString.years20("gross_profit", ticker));
    var profits = await checkForErrorStatus(response);
    return profits;
  },

  getOperatingProfit: async (ticker) => {
    const response = await fetch(
      formatString.years20("operating_income", ticker)
    );
    var profits = await checkForErrorStatus(response);
    return profits;
  },

  getEPS: async (ticker) => {
    const response = await fetch(formatString.years20("eps_diluted", ticker));
    var eps = await response.json();
    return eps["data"];
  },

  getDividends: async (ticker) => {
    const response = await fetch(formatString.years20("dividends", ticker));
    var dividends = await response.json();
    return dividends["data"];
  },

  getROIC: async (ticker) => {
    const response = await fetch(formatString.years20("roic", ticker));
    var roic = await response.json();
    return roic["data"];
  },
};

export async function getAPIData(ticker) {
  // const stats = await apiFuncs.getStats(ticker);
  // if (stats.hasOwnProperty("error")) {
  //   return stats;
  // }
  // const years = await apiFuncs.getYears(ticker);
  // const revenue = await apiFuncs.getRevenue(ticker);
  // const gross = await apiFuncs.getGrossProfit(ticker);
  // const operating = await apiFuncs.getOperatingProfit(ticker);
  // const eps = await apiFuncs.getEPS(ticker);
  // const dividends = await apiFuncs.getDividends(ticker);
  // const roic = await apiFuncs.getROIC(ticker);

  const stats = await apiFuncs.getStatsTEST(ticker);
  const years = await apiFuncs.getYearsTEST(ticker);
  const revenue = await apiFuncs.getDataTEST(ticker);
  const gross = await apiFuncs.getDataTEST(ticker);
  const operating = await apiFuncs.getDataTEST(ticker);
  const eps = await apiFuncs.getDataTEST(ticker);
  const dividends = await apiFuncs.getDataTEST(ticker);
  const roic = await apiFuncs.getROICTEST(ticker);

  return {
    years: years,
    revenue: revenue,
    stats: stats,
    gross: gross,
    operating: operating,
    eps: eps,
    dividends: dividends,
    roic: roic,
  };
}
