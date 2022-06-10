import React, { useContext } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { UserContext } from "../../../utils/context/index";
import "./style.css";
import styled from "styled-components";

/**
 * RadialChart component
 * @param {object} data main Data
 * @returns { React.ReactElement } a RadialBarChart
 */
const Score = () => {
  const userData = useContext(UserContext);
  let data;
  if (userData.userAccount.todayScore !== undefined) {
    data = userData.userAccount.todayScore;
  }
  const score = data ? data : "";

  let scoreArray = [
    {
      uv: 1,
      fill: "white",
    },
    {
      uv: score ? score : null,
      fill: "#FF0101",
    },
  ];

  // Only for score page
  const slug = window.location.pathname.split("/").splice(-1)[0];
  let doesTodayScorePage = false;
  if (slug === "today-score") {
    doesTodayScorePage = true;
  }
  // style
  const ScoreContainer = styled.div`
    ${doesTodayScorePage ? "width: 100%" : null}
  `;
  if (!userData.isIdValid)return <p>404 user not found</p>

  return (
    <ScoreContainer className="score">
      <h2>Score</h2>
      <h3>
        <span>{score ? score * 100 + "%" : null}</span> de votre objectif
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="55%"
          innerRadius="80%"
          outerRadius="80%"
          barSize={10}
          data={scoreArray}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar dataKey="uv" cornerRadius={10} />
        </RadialBarChart>
      </ResponsiveContainer>
    </ScoreContainer>
  );
};

export default Score;
