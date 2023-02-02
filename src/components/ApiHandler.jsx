const KEY = "K48RVJHYH25YVVH9";
class ApiHandler {
  #formatAPIString(func, ticker) {
    return `https://www.alphavantage.co/query?function=${func}&symbol=${ticker}&apikey=K48RVJHYH25YVVH9`;
  }

  getStockData(ticker) {
    const response = fetch(this.#formatAPIString("OVERVIEW", ticker)).json();

    return response[("Name", "Sector", "Industry")];
  }
}

export default ApiHandler;
