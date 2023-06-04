import React from 'react';
import ReactApexChart from 'react-apexcharts';
import '../Styles/totalRevenue.css';

const DoubleBar = () => {
    // Sample data for the chart
    const chartOptions = {
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56]
          }, {
            name: 'Revenue',
            data: [76, 85, 101, 98]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 250
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May'],
            },
           
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
          


    };
  
    return (
      <div>
        <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="bar" height={250} />
      </div>
    );
  };

export default DoubleBar;
    
