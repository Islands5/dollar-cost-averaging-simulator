import { ChartData } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

export const ReturnGraph: React.FC<{data: ChartData}> = ({data}) => {
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

  return (
    <Bar
      data={data}
      options={options}
      type="bar"
    />
  );
};