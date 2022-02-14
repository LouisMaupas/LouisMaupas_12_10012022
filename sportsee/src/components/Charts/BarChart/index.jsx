import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Barchart() {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          // data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
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
            />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
}

export default BarChart;
