import React, { useEffect } from 'react';
import { Chart } from 'chart.js';

const PieChart = () => {
  useEffect(() => {
    // Data for the outer doughnut chart (with all segments)
    const outerChartData = {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [
        {
          data: [30, 40, 30],
          backgroundColor: ['pink', 'blue', 'gray'],
        },
      ],
    };

    // Options for the outer doughnut chart
    const outerChartOptions = {
      cutout: '60%', // Adjust the size of the center hole
    };

    // Get the canvas element for the outer chart
    const outerCtx = document.getElementById('outer-chart').getContext('2d');

    // Create and display the outer doughnut chart
    const outerChart = new Chart(outerCtx, {
      type: 'doughnut',
      data: outerChartData,
      options: outerChartOptions,
    });

    // Create an array of inner doughnut charts
    const innerCharts = [10, 20, 15]; // These values represent the sizes of each inner chart

    // Create and display each inner doughnut chart
    innerCharts.forEach((innerSize, index) => {
      // Data for the inner doughnut chart
      const innerChartData = {
        labels: ['Inner Label'],
        datasets: [
          {
            data: [innerSize],
            backgroundColor: ['transparent'], // No background color for the inner chart
          },
        ],
      };

      // Options for the inner doughnut chart
      const innerChartOptions = {
        cutout: '80%', // Adjust the size of the center hole for each inner chart
        rotation: 0.5 * Math.PI * index, // Rotate each inner chart
      };

      // Get the canvas element for the inner chart
      const innerCtx = document.getElementById(`inner-chart-${index}`).getContext('2d');

      // Create and display the inner doughnut chart
      const innerChart = new Chart(innerCtx, {
        type: 'doughnut',
        data: innerChartData,
        options: innerChartOptions,
      });
    });
  }, []);

  return (
    <div>
      {/* Create a canvas element for the outer chart */}
      <canvas id="outer-chart"></canvas>

      {/* Create canvas elements for inner charts */}
      <canvas id="inner-chart-0"></canvas>
      <canvas id="inner-chart-1"></canvas>
      <canvas id="inner-chart-2"></canvas>
    </div>
  );
};

export default PieChart;
