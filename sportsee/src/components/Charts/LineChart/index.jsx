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

/**Styled components */
const WrapperDiv = styled.div`
    width: 31%;
    height: 230px;
    p {
      width: 100px;
      font-size: 14px;
      margin: 20px;
      position: absolute;
      z-index: 999;
      color: #ffffff;
      opacity: 0.5;
    }
  `,
  StyledTooltip = styled.div`
    width: 40px;
    height: 25px;
    color: black;
    font-size: 8px;
    font-weight: bold;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

/** Component for the linechart. It personnalises the tooltip */
function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <StyledTooltip>
        <p className="label">{`${payload[0].value} min`}</p>
      </StyledTooltip>
    );
  }
  return null;
}

/**
 * LineChart component using Recharts
 * @param {*} props
 * @returns
 */
function LinechartComponent(props) {
  //change the days of the data to be more explicit with the letters of the days
  const dates = ["L", "M", "M", "J", "V", "S", "D"],
    data = props.data;
  // data.map((date) => (date.day = dates[date.day - 1]));

  if (!props) return null;

  return (
    <ResponsiveContainer>
      <div id="line-chart" className="card">
        <WrapperDiv>
          <p>Durée moyenne des sessions</p>
          <LineChart
            margin={{ top: 40, right: 0, left: 0, bottom: 5 }}
            width={230}
            height={230}
            data={data}
            style={{ background: "#FF0000", borderRadius: "5px" }}
          >
            <Line type="monotone" dataKey="sessionLength" stroke="grey" />
            <XAxis dataKey="day" />
            <YAxis
              hide={true}
              type="number"
              domain={["dataMin", "dataMax+15"]}
            />
            <Tooltip
              viewBox={{ x: 10, y: 50, width: 4000, height: 400 }}
              // cursor={{ stroke: "rgba(236,61,61, 0.6)", strokeWidth: 50 }}
              // wrapperStyle={{
              //   width: 40,
              //   height: 25,
              //   fontSize: 10,
              //   backgroundColor: "#FFF",
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              // }}
              content={<CustomTooltip />}
            />
          </LineChart>
        </WrapperDiv>
      </div>
    </ResponsiveContainer>
  );
}

export default LinechartComponent;
