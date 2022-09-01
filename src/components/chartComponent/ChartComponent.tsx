import React, { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as setters from '@state/setters';
import { ChartInterface } from '@interfaces/ChartInterface';
import { useSelector } from 'react-redux';
import { RootState } from '@state/reducer';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const ChartComponent = (props: ChartInterface) => {
  const labels = props.labels;
  const datasets = props.datasets;
  const data = {
    labels,
    datasets
  };
  const chartRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setClickedSchool } = bindActionCreators(setters, dispatch);
  const state = useSelector((storeData: RootState) => storeData.data);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      },
      events: ['click'],
      tooltipEvents: ['click'],
      tooltip: {
        callbacks: {
          label: function (context: any) {
            if (state.clickedSchool.label != context.dataset.label || state.clickedSchool.month != context.label) {
              console.log(context);
              setClickedSchool({
                label: context.dataset.label,
                lessonsNo: context.formattedValue,
                month: context.label
              });
            }
            return context.formattedValue + ':' + context.dataset.label;
          }
        }
      }
    }
  };
  const onClick = () => {
    navigate('/details');
  };

  return (
    <Line
      data-testid="chart-component"
      id="chart"
      options={options}
      data={data}
      height="100"
      ref={chartRef}
      onClick={onClick}
    />
  );
};
