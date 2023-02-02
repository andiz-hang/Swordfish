class ApiHandler {
  #formatAPIString(func, ticker) {
    return `https://www.alphavantage.co/query?function=${func}&symbol=${ticker}&apikey=K48RVJHYH25YVVH9`;
  }

  // #testFormatAPIString() {
  //   return "https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo";
  // }

  async getStockData(ticker) {
    const response = await fetch(this.#formatAPIString("OVERVIEW", ticker));
    const res = await response.json();
    return {
      Name: res["Name"],
      Sector: res["Sector"],
      Industry: res["Industry"],
    };
  }
}

export default ApiHandler;
