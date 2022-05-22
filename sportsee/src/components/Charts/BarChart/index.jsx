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

  /**
   *
   * @param {*} param0
   * @returns
   */
  function Tooltip({ active, payload }) {
    if (active) {
      return (
        <StyledTooltip>
          <span>{`${payload[0].value}kg`}</span>
          <span>{`${payload[1].value}kCal`}</span>
        </StyledTooltip>
      );
    }
    return null;
  }

  if (userData && userData !== undefined) {
    return (
      <BarChartBackground>
        <div>Activité quotidienne</div>
        <ResponsiveContainer minWidth={700} width="100%" height={250}>
          <BarChart width="100%" data={barChartMainData} barSize={7} barGap={8}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Tooltip
              content={<Tooltip />}
              cursor={{
                stroke: "grey",
                strokeWidth: 0,
              }}
            />

            <Legend
              iconSize={8}
              iconType="circle"
              verticalAlign="top"
              height={47}
            />

            <XAxis dataKey="day" />

            <Bar
              name="Poids(kg)"
              yAxisId="right"
              dataKey="kilogram"
              radius={[3, 3, 0, 0]}
              fill="#282D30"
            />
            <YAxis hide yAxisId="left" />

            <Bar
              name="Calories brûlées (kCal)"
              yAxisId="left"
              dataKey="calories"
              radius={[3, 3, 0, 0]}
              fill="#E60000"
            />
            <YAxis yAxisId="right" orientation="right" stroke="#9B9EAC" />
          </BarChart>
        </ResponsiveContainer>
      </BarChartBackground>
    );
  } else {
    return <p>Loading ...</p>;
  }
}

export default BarChartComponent;
