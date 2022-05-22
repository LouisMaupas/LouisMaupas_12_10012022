// React
import React, { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";
// import AllCards from "./../components/AllCards/AllCards";

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
import AllCards from "../../components/AllCards/AllCards";
import { UserContext } from "../../utils/context";
import { Link } from "react-router-dom";
import style from "./home.css";

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
    padding-top: 2rem;
    width: 100%;
  `;
  const ChartsContainer = styled.div`
    width: 100%;
  `;
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
          <Link to={`/user/${userAccount.id}/activity`}>
            <BarChart data={userActivity} />
          </Link>
          <div className="d-flex justify-content-between">
            <Link
              className="link--chart"
              to={`/user/${userAccount.id}/average-sessions`}
            >
              <LineChart data={userAverageSessions} />
            </Link>
            <Link
              className="link--chart"
              to={`/user/${userAccount.id}/activities`}
            >
              <RadarChart data={userPerformance} />
            </Link>
            <Link
              className="link--chart"
              to={`/user/${userAccount.id}/today-score`}
            >
              <RadialChart data={userAccount} />
            </Link>
          </div>
        </ChartsContainer>
      </div>
      <div>
        {userAccount.keyData ? (
          <Link to={`/user/${userAccount.id}/key-data`}>
            <AllCards
              iconCalories={iconCalories}
              iconCarbs={iconCarbs}
              iconFat={iconFat}
              iconProtein={iconProtein}
              userAccount={userAccount}
            />
          </Link>
        ) : (
          <></>
        )}
      </div>
    </HomeLabel>
  );
}

export default Home;
