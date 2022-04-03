// React
import React, { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";

import { PieChart, Pie } from "recharts";

/**
 * PieChart component using Recharts
 * @param {*} data
 * @returns
 */
function Piechart(data) {
  console.log(data);
  const pieChartMainData = data.data.todayScore * 100 || data.data.score * 100;

  let score = 0;
  if (data) score = { score: pieChartMainData };

  let startangle = 90,
    endangle = startangle + score.score * 3.6;

  return (
    <div id="piechart" className="card">
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
    </div>
  );
}

export default Piechart;
