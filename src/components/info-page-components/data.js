import testing from "../ApiHandler";

export async function revenue(ticker) {
  const data = await testing.getRevenue(ticker);

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