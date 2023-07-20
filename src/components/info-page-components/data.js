export function revenueConfigs(years, data) {
  const settings = {
    // labels are filled with years in StockInfo.jsx
    labels: years,
    datasets: [
      {
        label: 'Revenue (Millions of $)',
        id: 1,
        data: data.map((r) => r / 1000000),
      }
    ],
  }

  return settings;
}
