import { Bar, Line } from "react-chartjs-2";

// THESE IMPORTS ARE IMPORTANT DO NOT DELETE
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

export const LineChart = (props) => {
  return (
    <Line
      data={props.chartData}
      options={props.options}
    />
  );
};

export const BarChart = (props) => {
  return (
    <Bar
      data={props.chartData}
      options={props.options}
    />
  );
};

// CHART FOR TESTING PURPOSES ONLY
// export const TestChart = () => {
//   return (
//     <Line
//       // datasetIdKey='id'
//       data={{
//         labels: ["2022","2021","2020","2019","2018"],
//         datasets: [
//           {
//             id: 1,
//             label: '',
//             data: [111443,92953,73365,58896,64121],
//           },
//         ],
//       }}
//     />
//   );
// };