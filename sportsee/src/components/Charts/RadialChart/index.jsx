import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import styled from "styled-components";

/**
 * This component returns a RadialBarChart graphic with user's score in percentage
 * @param {object} data main Data
 * @returns { React.ReactElement } a RadialBarChart
 */

const Score = (data) => {
  const score = data.data ? data.data : "";

  let scoreArray = [
    {
      uv: 1,
      fill: "white",
    },
    {
      uv: score.score ? score.score : score.todayScore,
      fill: "#FF0101",
    },
  ];

  const ScoreContainer = styled.div`
    grid-area: 4 / 3 / 6 / 4;
    background-color: #fbfbfb;
    border-radius: 5px;
    margin: 0px 35px 0px 0px;
    position: relative;
    z-index: -2;
    height: 300px;
  `;
  const Score = styled.span`
    position: absolute;
    margin-left: 25px;
    margin-top: 15px;
    font-size: 0.9em;
  `;
  const ScoreText = styled.span`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 100;
    text-align: center;
    font-size: 0.9em;
  `;
  const spanScoreText = styled.span`
    font-size: 1.7em;
    font-weight: bold;
  `;

  return (
    <ScoreContainer>
      <Score>Score</Score>
      <ScoreText>
        <span>
          {score.score ? score.score * 100 + "%" : score.todayScore * 100 + "%"}
        </span>{" "}
        de votre objectif
      </ScoreText>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
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
