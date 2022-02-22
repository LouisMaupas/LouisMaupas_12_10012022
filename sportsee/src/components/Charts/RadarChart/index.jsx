import React, { PureComponent, useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// TODO : bug cf console
function Radarchart(data) {
  const radarChartMainData = data.data;
  const radarChartLabels = radarChartMainData.kind;
  return (
    <div id="radarchart" className="card">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="70%"
        width={258}
        height={263}
        data={radarChartMainData.data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </div>
  );
}

export default Radarchart;
