import React, { PureComponent, useContext } from "react";
import { UserContext } from "../../../utils/context/index";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// Ext
import styled from "styled-components";

/**
 * BarChart component using Recharts
 * @param {*} data
 * @returns
 */
function BarChartComponent() {
  const userData = useContext(UserContext);
  let userActivity = [];

  if (userData && userData !== undefined) {
    userActivity = userData.userActivity;
  }

  const barChartMainData = userActivity.sessions;
  // map dates to numbers
  if (barChartMainData) {
    barChartMainData.map((date, index) => {
      date.day = index + 1;
    });
  }

  // styles
  const BarChartBackground = styled.div`
    background-color: #fbfbfb;
    border-radius: 5px;
  `;
  //
  const StyledTooltip = styled.div`
    width: 40px;
    height: 60px;
    color: white;
    font-size: 8px;
    font-weight: normal;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    span {
      text-align: center;
    }
  `;

  const legendStyle = {
    position: "absolute",
    top: "22px",
    fontSize: "0.7em",
  };

  /**
   *
   * @param {*} param0
   * @returns
   */
  const TooltipStyle = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div
          className="tooltip"
          style={{
            background: "#E60000",
            padding: "15px 5px",
            color: "white",
          }}
        >
          <p>{payload[0].value}kg</p>
          <p>{payload[1].value}Kcal</p>
        </div>
      );
    }
    return null;
  };

  if (userData && userData !== undefined) {
    return (
      <div className="activities">
        <div>Activité quotidienne</div>
        <ResponsiveContainer width="100%" minHeight={300} minWidth={500}>
          <BarChart
            width={500}
            height={300}
            data={barChartMainData}
            margin={{
              top: 85,
              right: 30,
              left: 20,
              bottom: 15,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 1"
              // @ts-ignore
              vertical=""
            />
            <XAxis
              padding={{ left: 12, right: 10 }}
              tickSize={20}
              tickLine={false}
              tickFormatter={(number) => number + 1}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              orientation="right"
              dataKey="kilogram"
              domain={[60, 90]}
              ticks={[60, 75, 90]}
              yAxisId="rigth"
              scale="auto"
              allowDataOverflow={false}
              allowDecimals={false}
            />
            <YAxis dataKey="calories" hide scale="auto" yAxisId="left" />
            <Tooltip content={<TooltipStyle payload={[barChartMainData]} />} />
            <Legend
              verticalAlign="top"
              align="right"
              // @ts-ignore
              wrapperStyle={legendStyle}
              iconType="circle"
            />
            <Bar
              yAxisId="rigth"
              dataKey="kilogram"
              fill="#282D30"
              radius={[3, 3, 0, 0]}
              barSize={10}
              name="Poids (kg)"
            />
            <Bar
              yAxisId="left"
              dataKey="calories"
              fill="#E60000"
              radius={[3, 3, 0, 0]}
              barSize={10}
              name="Calories brulées (kCal)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return <p>Loading ...</p>;
  }
}

export default BarChartComponent;
