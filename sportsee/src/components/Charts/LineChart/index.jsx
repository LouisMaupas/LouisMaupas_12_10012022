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

/** Component for the linechart. It personnalises the tooltip */
function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
}

function LinechartComponent(props) {
  //change the days of the data to be more explicit with the letters of the days
  const dates = ["L", "M", "M", "J", "V", "S", "D"],
    data = props.data;
  // data.map((date) => (date.day = dates[date.day - 1]));

  if (!props) return null;

  return (
    <div id="line-chart" className="card">
      <div className="linechart-title">Durée moyenne des sessions</div>
      <LineChart
        margin={{ top: 5, right: 15, bottom: 5, left: 15 }}
        width={258}
        height={263}
        data={data}
      >
        <Line type="monotone" dataKey="sessionLength" stroke="grey" />
        <XAxis dataKey="day" />
        <YAxis hide={true} type="number" domain={["dataMin", "dataMax+15"]} />
        <Tooltip
          cursor={{ stroke: "rgba(236,61,61, 0.6)", strokeWidth: 50 }}
          wrapperStyle={{
            width: 40,
            height: 25,
            fontSize: 10,
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          content={<CustomTooltip />}
        />
      </LineChart>
    </div>
  );
}

export default LinechartComponent;
