import React, { PureComponent, useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

function formatPolarAxis(value) {
  if (value === 1) return "Intensité";
  if (value === 2) return "Vitesse";
  if (value === 3) return "Force";
  if (value === 4) return "Endurance";
  if (value === 5) return "Energie";
  if (value === 6) return "Cardio";
  return value;
}

/**
 * RadarChart component using Recharts
 * @param {*} data
 * @returns
 */
function Radarchart(data) {
  return (
    <div id="radarchart" className="card">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="70%"
        width={248}
        height={255}
        data={data}
        startAngle={30}
        endAngle={-330}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" fontSize="12" color="white" />
        {/* <PolarAngleAxis stroke="#fff" tickLine={false}
         tick={{ fontSize: 10 }} dataKey="kind" 
         tickFormatter={formatPolarAxis} color="blue" /> */}
        <PolarRadiusAxis />
        <Radar dataKey="value" stroke="white" fill="red" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}

export default Radarchart;
