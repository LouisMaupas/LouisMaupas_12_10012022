import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Component
function BarChartMain(data) {
  const sessionsData = data.data.sessions,
  configLabels = [1,2,3,4,5,6,7,8],
  configData = {
    labels: configLabels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  
    return (
      <ResponsiveContainer width="100%" height="100%">
        <div
          // width={500}
          // height={300}
          data={configData}
          // margin={{
          //   top: 5,
          //   right: 30,
          //   left: 20,
          //   bottom: 5,
          // }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis
              dataKey="kilogram"
              yAxisId="left"
              orientation="right"
              stroke="#8884d8"
              interval="number"
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 14, fill: "#74798c" }}
              tickCount={8}
              // domain={[data[1].minKg - 1, data[1].maxKg + 1]}
            />
            <YAxis
              dataKey="calories"
              yAxisId="right"
              orientation="right"
              stroke="#82ca9d"
              hide={true}
              // domain={[data[1].minKcal - 100, data[1].maxKcal + 100]}
            /> */}
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          {/* <Bar dataKey="pv" fill="#8884d8" /> */}
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </div>
      </ResponsiveContainer>
    );
}

export default BarChartMain;
