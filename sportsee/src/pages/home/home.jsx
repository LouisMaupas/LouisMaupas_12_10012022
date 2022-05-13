// React
import React, { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";

// Ext
import styled from "styled-components";

// Img
import iconCalories from "../../img/icon_calories.png";
import iconCarbs from "../../img/icon_carbs.png";
import iconFat from "../../img/icon_fat.png";
import iconProtein from "../../img/icon_protein.png";

// App
import Welcome from "../../components/Welcome";
import DailyMotivation from "../../components/DailyMotivation";
import Card from "../../components/Cards/index";
import BarChart from "../../components/Charts/BarChart";
import LineChart from "../../components/Charts/LineChart";
import RadarChart from "../../components/Charts/RadarChart";
import RadialChart from "../../components/Charts/RadialChart";
import { UserContext } from "../../utils/context";

/**
 * Home page component
 * @returns
 */
function Home() {
  // Get user data
  const userData = useContext(UserContext),
    userAccount = userData.userAccount,
    userActivity = userData.userActivity,
    userAverageSessions = userData.userAverageSessions.sessions,
    userPerformance = userData.userPerformance.data;

  // styled-component
  const HomeLabel = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    width: 100%;
  `;
  const ChartsContainer = styled.div``;
  const MainDataContainer = styled.div`
    display: flex;
  `;

  return (
    <HomeLabel>
      <div>
        <Welcome
          userName={userAccount.id ? userAccount.userInfos.firstName : null}
        />
        <DailyMotivation />

        <ChartsContainer>
          <BarChart data={userActivity}></BarChart>
          <div className="d-flex justify-content-between">
            <LineChart data={userAverageSessions}></LineChart>
            <RadarChart data={userPerformance}></RadarChart>
            <RadialChart data={userAccount}></RadialChart>
          </div>
        </ChartsContainer>
      </div>
      <div>
        <Card
          image={iconCalories}
          value={userAccount.keyData ? userAccount.keyData.calorieCount : null}
          type={"Calories"}
        ></Card>
        <Card
          image={iconProtein}
          value={
            userAccount.keyData ? userAccount.keyData.carbohydrateCount : null
          }
          type={"Proteines"}
        ></Card>
        <Card
          image={iconCarbs}
          value={userAccount.keyData ? userAccount.keyData.lipidCount : null}
          type={"Glucides"}
        ></Card>
        <Card
          image={iconFat}
          value={userAccount.keyData ? userAccount.keyData.proteinCount : null}
          type={"Lipides"}
        ></Card>
      </div>
    </HomeLabel>
  );
}

export default Home;
