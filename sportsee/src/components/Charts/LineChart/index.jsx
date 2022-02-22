import styled from "styled-components";
import React, { PureComponent } from "react";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function LinechartComponent(data) {
  console.log(data);
  const lineChartMainData = data.data.sessions;
  console.log(lineChartMainData);
  console.log(lineChartMainData);
  return (
    <div id="line-chart" className="card">
      <div className="linechart-title">Durée moyenne des sessions</div>
      <LineChart width={258} height={263} data={lineChartMainData}>
        <Line type="monotone" dataKey="sessionLength" stroke="#ffb6b6" />
        <XAxis dataKey="day" />
        <YAxis hide={true} type="number" domain={["dataMin", "dataMax+15"]} />
      </LineChart>
    </div>
  );
}

export default LinechartComponent;
