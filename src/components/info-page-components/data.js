export function revenueConfigs(years, data, legendLabel) {
  const settings = {
    // labels are filled with years in StockInfo.jsx
    labels: years,
    datasets: [
      {
        label: legendLabel,
        id: 1,
        data: data.map((r) => r / 1000000),
      }
    ],
  }

  return settings;
}
