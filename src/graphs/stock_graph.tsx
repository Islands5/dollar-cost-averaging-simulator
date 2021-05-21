import { ChartData, ChartOptions } from 'chart.js';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

export const StockGraph: React.FC<{data: ChartData, options: ChartOptions, type: String}> = ({data, options, type}) => {
  if(type === 'bar') {
    return (
      <Bar
        data={data}
        options={options}
        type='bar'
      />
    );
  }else{
    return (
      <Line
        data={data}
        options={options}
        type='line'
      />
    )
  }
};