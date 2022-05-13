// React
import React, { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";

import { PieChart, Pie, ResponsiveContainer } from "recharts";

/**
 * PieChart component using Recharts
 * @param {*} data
 * @returns
 */
function Piechart(data) {
  const pieChartMainData = data.data.todayScore * 100 || data.data.score * 100;

  let score;
  if (data !== undefined) {
    score = {
      name: "score",
      value: pieChartMainData,
    };
  }

  let startangle = 90,
    endangle = startangle + score.value * 3.6;

  const data02 = [
    {
      name: "Group D",
      value: 9800,
    },
  ];

  return (
    <ResponsiveContainer>
      <PieChart width={200} height={250}>
        <Pie
          startAngle={startangle}
          endAngle={endangle}
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="40%"
          fill="red"
          innerRadius={60}
          label={false}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default Piechart;

/*

      <div id="score-title">Score</div>
      <PieChart width={258} height={263}>
        <Pie
          data={score.score}
          dataKey="score"
          startAngle={startangle}
          endAngle={endangle}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={90}
          fill="red"
        />
      </PieChart>
      <div id="result">
        <p id="resultscore">{score.score}%</p>
        <p>de votre objectif</p>
      </div>
*/
