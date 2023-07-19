function formatAPIString(func, ticker) {
  return `https://www.alphavantage.co/query?function=${func}&symbol=${ticker}&apikey=K48RVJHYH25YVVH9`;
}

// helper functions go in here
const api = {
  getStockData: async (ticker) => {
    const response = await fetch(formatAPIString("OVERVIEW", ticker));
    const res = await response.json();
    return {
      Name: res["Name"],
      Sector: res["Sector"],
      Industry: res["Industry"],
    };
  },

  // getIncomeStatement: async (ticker) => {
  //   const response = await fetch(formatAPIString("INCOME_STATEMENT", ticker));
  //   const res = await response.json();
  //   return {
  //     interestExpense: res["interestExpense"],
  //     cashflowFromInvestment: res["cashflowFromInvestment"],
  //   };
  // },

  getCFStatement: async (ticker) => {
    // const response = await fetch(formatAPIString("CASH_FLOW", ticker));
    const response = await fetch(
      "https://www.alphavantage.co/query?function=CASH_FLOW&symbol=IBM&apikey=demo"
    ); // TODO: TESTING
    const res = await response.json();
    const reports = res["annualReports"];

    return reports.map((report) => {
      const date = new Date(report["fiscalDateEnding"]);

      return {
        year: date.getFullYear(),
        operatingCashflow: report["operatingCashflow"],
        capitalExpenditures: report["capitalExpenditures"],
      };
    });
  },
};

export default api;
