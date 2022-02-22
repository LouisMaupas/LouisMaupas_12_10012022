// React
import React, { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";

import { PieChart, Pie } from "recharts";

function Piechart(data) {
  const pieChartMainData = data.data.todayScore * 100;

  let score = 0;
  if (data) score = { score: pieChartMainData };

  let startangle = 90,
    endangle = startangle + score.score * 3.6;

  return (
    <div>
      <div>Score</div>
      <PieChart width={258} height={263}>
        <Pie
          data={score}
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
      <div>
        <p>{pieChartMainData}%</p>
        <p>de votre objectif</p>
      </div>
    </div>
  );
}

export default Piechart;
