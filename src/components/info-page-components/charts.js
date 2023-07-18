import { Bar, Line } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

export const TestChart = () => {
  return (
    <Line
      // datasetIdKey='id'
      data={{
        labels: ["2022","2021","2020","2019","2018"],
        datasets: [
          {
            id: 1,
            label: '',
            data: [111443,92953,73365,58896,64121],
          },
        ],
      }}
    />
  );
};

export const LineChart = (props) => {

  return (
    <Line
      // datasetIdKey='id'
      data={props.chartData}
    />
  );
};

export const BarChart = (props) => {

  console.log("BarChart", props.chartData);

  return (
    <Bar
      datasetIdKey={props.id}
      data={props.chartData}
    />
  );
};