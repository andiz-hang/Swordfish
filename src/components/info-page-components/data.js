import api from "../ApiHandler";

export async function getFCF(ticker) {
  const cfData = await api.getCFStatement(ticker);

  const years = cfData.map((datum) => datum.year.toString());
  const cf = cfData.map((datum) => (datum.operatingCashflow - datum.capitalExpenditures) / 1000000)

  const settings = {
    labels: years.reverse(),
    datasets: [
      {
        id: 1,
        data: cf.reverse(),
      }
    ]
  }

  return settings;
}