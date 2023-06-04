import React from 'react';
import ReactApexChart from 'react-apexcharts';
import '../Styles/totalRevenue.css';

const AreaChart = () => {
    // Sample data for the chart
    const chartOptions = {
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
          options: {
            chart: {
              height: 350,
              type: 'bar'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },



    };
  
    return (
      <div>
        <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="bar" height={250} />
      </div>
    );
  };

export default AreaChart;
