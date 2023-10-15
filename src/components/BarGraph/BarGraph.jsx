// import React, { useState, useEffect } from 'react';
// import Plot from 'react-plotly.js';
// import '../Dashboard/Dashboard.css';

// const BarGraph = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Fetch the data from the API
//     fetch('https://mocki.io/v1/6ee65e1d-4df0-40c9-b329-482dbfc526f9')
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   const products = data.topProducts.map((entry) => entry.name);
//   const sold = data.topProducts.map((entry) => (entry.sold > 500 ? entry.sold - 500 : 30));
//   const sold2 = sold.map((value) => value - 10);

//   const plotData = [
//     {
//       x: products,
//       y: sold,
//       name: 'Sold 1',
//       type: 'bar',
//       marker: {
//         color: '#0CD664',
//       },
//     },
//     {
//       x: products,
//       y: sold2,
//       name: 'Sold 2',
//       type: 'bar',
//       marker: {
//         color: '#EE8484',
//       },
//     },
//   ];

//   return (
//     <div className="mt-[40.83px]">
//       <Plot
//         data={plotData}
//         className=""
//         layout={{
//           width: 500,
//           height: 339,
//           colors: ['#0CD664', '#EE8484'],
//           paper_bgcolor:'rgba(0,0,0,0)',
//           plot_bgcolor:'rgba(0,0,0,0)'
//         }}
//         config={{ responsive: true }} // Make the layout responsive
//       />
//     </div>
//   );
// };

// export default BarGraph;


// import React, { useState, useEffect } from 'react';
// import Plot from 'react-plotly.js';
// import '../Dashboard/Dashboard.css';

// class ResizableDiv extends React.Component {
//   constructor(props) {
//     super(props);
//     this.ref = React.createRef();
//     this.observer = null;
//   }

//   componentDidMount() {
//     this.observer = new ResizeObserver(
//       () => window.dispatchEvent(new Event("resize"))
//     );
//     this.observer.observe(this.ref.current);
//   }

//   componentWillUnmount() {
//     if (this.observer) {
//       this.observer.unobserve(this.ref.current);
//     }
//   }

//   render() {
//     return (
//       <div style={{ resize: 'both', overflow: 'hidden' }} ref={this.ref}>
//         {this.props.children}
//       </div>
//     );
//   }
// }

// class PlotlyFigure extends React.Component {
//   render() {
//     const { data, layout } = this.props;
//     return (
//       <ResizableDiv>
//         <Plot
//           data={data}
//           layout={layout}
//           style={{ width: '100%', height: '100%' }}
//         />
//       </ResizableDiv>
//     );
//   }
// }

// const BarGraph = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Fetch the data from the API
//     fetch('https://mocki.io/v1/6ee65e1d-4df0-40c9-b329-482dbfc526f9')
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   const products = data.topProducts.map((entry) => entry.name);
//   const sold = data.topProducts.map((entry) => (entry.sold > 500 ? entry.sold - 500 : 30));
//   const sold2 = sold.map((value) => value - 10);

//   const plotData = [
//     {
//       x: products,
//       y: sold,
//       name: 'Sold 1',
//       type: 'bar',
//       marker: {
//         color: '#0CD664',
//       },
//     },
//     {
//       x: products,
//       y: sold2,
//       name: 'Sold 2',
//       type: 'bar',
//       marker: {
//         color: '#EE8484',
//       },
//     },
//   ];

//   const layout = {
//     width: '100%', // Set the width to 100% for responsiveness
//     barmode: 'group', // Ensure bars don't get truncated
//     colors: ['#0CD664', '#EE8484'],
//     paper_bgcolor: 'rgba(0,0,0,0)',
//     plot_bgcolor: 'rgba(0,0,0,0)',
//   };

//   return (
//     <div className="mt-[40.83px]">
//       <PlotlyFigure data={plotData} layout={layout} />
//     </div>
//   );
// };

// export default BarGraph;




import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import '../Dashboard/Dashboard.css';

const BarGraph = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the data from the API
    fetch('https://mocki.io/v1/6ee65e1d-4df0-40c9-b329-482dbfc526f9')
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

  const products = data.topProducts.map((entry) => entry.name);
  const sold = data.topProducts.map((entry) => (entry.sold > 500 ? entry.sold - 500 : 30));
  const sold2 = sold.map((value) => value - 10);

  const plotData = [
    {
      x: products,
      y: sold,
      name: 'Sold 1',
      type: 'bar',
      marker: {
        color: '#0CD664',
      },
    },
    {
      x: products,
      y: sold2,
      name: 'Sold 2',
      type: 'bar',
      marker: {
        color: '#EE8484',
      },
    },
  ];

  return (
    <div className="mt-[40.83px]">
      <Plot
        data={plotData}
        className=""
        layout={{
          width: 800,
          height: 339,
          colors: ['#0CD664', '#EE8484'],
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
        }}
        config={{ responsive: true }}
      />
    </div>
  );
};

export default BarGraph;
