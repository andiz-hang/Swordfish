import api from "../ApiHandler";

export async function revenue(ticker) {
  const data = await api.getRevenueTEST(ticker);

  const settings = {
    labels: data.year,
    datasets: [
      {
        id: 1,
        data: data.revenue,
      }
    ]
  }
  return settings;
}