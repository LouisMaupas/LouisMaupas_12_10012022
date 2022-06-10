import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { UserContext } from "../../../utils/context/index";
import style from "./style.css";

/**
 * LineChart component
 * @param {object} data average sessions data
 * @returns { React.ReactElement } LineChart
 */

const AverageSessions = () => {
  const userData = useContext(UserContext);
  let averageSessions;
  let data;
  if (userData && userData.userAverageSessions.constructor === Object) {
    averageSessions = userData.userAverageSessions;
    data = averageSessions.sessions;
  }
  const legend = () => {
    return (
      <div
        style={{ color: "white", margin: 20, marginBottom: 50, opacity: 0.7 }}
      >
        <p>Durée moyenne des sessions</p>
      </div>
    );
  };

  /**
   * Tooltip style + add a paragraph for time of sessions, payload corresponds to "averageSessions"
   * @param {any} payload "averageSessions" variable
   * @returns { ReactElement | null } time of sessions with units (min)
   */

  const TooltipStyle = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div
          className="tooltip"
          style={{
            background: "white",
            padding: "10px 5px",
          }}
        >
          <p>{payload[0].value} min</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="average-sessions">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
              let div = document.querySelector(".average-sessions");
              let windowWidth = div.clientWidth;
              let percentage = Math.round(
                (e.activeCoordinate.x / windowWidth) * 100
              );
              // Hoover background
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${percentage}%, rgba(175,0,0,1.5) ${percentage}%, rgba(175,0,0,1.5) 100%)`;
            }
          }}
          width="100%"
          height="50%"
          data={data}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "white", opacity: "0.7" }}
            tickFormatter={(day) => {
              const daysLetter = ["L", "M", "M", "J", "V", "S", "D"];
              return daysLetter[day - 1];
            }}
            allowDataOverflow={false}
          />
          <Tooltip content={<TooltipStyle payload={[averageSessions]} />} />
          <Legend content={legend} verticalAlign="top" />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "#fff",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessions;
