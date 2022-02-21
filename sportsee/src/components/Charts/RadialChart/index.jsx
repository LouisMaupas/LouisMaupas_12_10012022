// React
import React, { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";

import { PieChart, Pie } from "recharts";

function Piechart(data) {
  const pieChartMainData = data.data;

  return (
    <div>
      <div>Score</div>
      <PieChart width={258} height={263}>
        <Pie
          data={}
          dataKey=""
          startAngle={startangle}
          endAngle={endangle}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={90}
          fill=""
        />
      </PieChart>
      <div>
        <p>de votre objectif</p>
      </div>
    </div>
  );
}

export default Piechart;
