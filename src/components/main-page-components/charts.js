import { Bar, Line } from "react-chartjs-2";

// THESE IMPORTS ARE IMPORTANT DO NOT DELETE
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
// eslint-disable-next-line
import { Chart } from "react-chartjs-2";

// Returns num, but with all the thousands separator commas in place.
function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Configs for charts
export function dataConfigs(label, years, data, color, dollar_signs=false, precision=0, percent=false) {
  const configs = {
    data: {
      labels: years,
      datasets: [
        {
          id: 1,
          label: label,
          data: data,
          backgroundColor: color
        },
      ],
    },
    options: {
      scaleShowValues: true,
      scales: {
        x: {
          ticks: {
            autoSkip: false
          },
        },
        y: {
          min: 0,
          ticks: {
            callback: function(value, index, ticks) {
              return value.toFixed(precision);
            }
          },
        }
      }
    },
  };

  if (dollar_signs) {
    configs.options.scales.y.ticks = {
      // Include a dollar sign in the ticks
      callback: function(value, index, ticks) {
          return '$' + numberWithCommas(value.toFixed(precision));
      }
    }
  }

  if (percent) {
    configs.options.scales.y.ticks = {
      // Include a dollar sign in the ticks
      callback: function(value, index, ticks) {
          return numberWithCommas(value.toFixed(2) + '%');
      }
    }
  }

  return configs;
};

export const BarChart = (props) => {
  return (
    <Bar
      data={props.chartData.data}
      options={props.chartData.options}
    />
  );
};

export const LineChart = (props) => {
  return (
    <Line
      data={props.chartData.data}
      options={props.chartData.options}
    />
  );
};