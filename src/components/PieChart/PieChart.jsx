import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const PieChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the data from the API
    fetch('https://mocki.io/v1/b88d463a-ad12-4474-a75a-f0e294676698')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const labels = Object.keys(data);
  const values = Object.values(data);

  const plotData = [
    {
      labels: labels,
      values: values,
      type: 'pie',
      hole: 0.6, // Add a hole to create a donut chart
      marker: {
        colors: ['#0CD664', '#EE8484', '#F6DC7D'],
      },
    },
  ];

  return (
    <div className=''>
      <Plot
        className='rounded-lg'
        data={plotData}
        layout={{
          width: 480, 
          height: 256, 
          colors: ['#0CD664', '#EE8484', '#F6DC7D'],
          paper_bgcolor:'rgba(0,0,0,0)',
          plot_bgcolor:'rgba(0,0,0,0)'
        }}
        config={{ displayModeBar: false }} // Optional: Hide the plotly mode bar
      />
    </div>
  );
};

export default PieChart;
