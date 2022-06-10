import React, { PureComponent, useEffect, useState, useContext } from "react";
import { UserContext } from "../../../utils/context/index";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * RadarChart component
 * @param {*} data
 * @returns
 */
function Radarchart() {
  const userData = useContext(UserContext);
  let data;
  if (userData && userData !== undefined) {
    data = userData;
  }
  let chartData = [];
  function formatPolarAxis(values) {
    const mappingkinds = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };
    if (userData.userPerformance.constructor === Object) {
      chartData = data.userPerformance.data.map((element) => {
        return {
          value: element.value,
          kind: mappingkinds[element.kind],
        };
      });
    }
  }

  if (data !== undefined) {
    formatPolarAxis(data);
  }

  return (
    <ResponsiveContainer width="100%" height={230}>
      <RadarChart
        outerRadius={48}
        data={chartData}
        style={{ background: "#282D30", borderRadius: "5px", fill: "#FFF" }}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" style={{ fontSize: "12px" }} />
        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} />
        <Radar
          dataKey="value"
          legendType={"none"}
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default Radarchart;
