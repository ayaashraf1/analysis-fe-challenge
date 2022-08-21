import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

interface ChartInterface {
  labels:string[],
  datasets:{
    label:string,
    data: number[],
    borderColor: string,
    backgroundColor: string,
  }[]
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

export const ChartComponent = (props:ChartInterface) => {
  const labels = props.labels;
  const datasets = props.datasets;
  const data = {
    labels,
    datasets
  };
  const handleChartClick=(e: React.MouseEvent<HTMLElement>)=>{
      //[to-do] handle details page by clicking in any point of chart and load the same data when back
      console.log(e);
  }
  return <Line id="chart" options={options} data={data} height="100" onClick={handleChartClick} />;
}