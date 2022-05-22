import Header from "./components/Header";
import Home from "./pages/home/home";
import SideMenu from "./components/SideMenu";
import index from "./index.css";
import styled from "styled-components";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { UsersDataProvider } from "./utils/context/index";
import { useState, useContext } from "react";
import { UserContext } from "./utils/context/index";
import BarChart from "./components/Charts/BarChart/index";
import LineChart from "./components/Charts/LineChart/index";
import AllCards from "./components/AllCards/AllCards";
import RadarChart from "./components/Charts/RadarChart";
import RadialChart from "./components/Charts/RadialChart";
import iconCalories from "./img/icon_calories.png";
import iconCarbs from "./img/icon_carbs.png";
import iconFat from "./img/icon_fat.png";
import iconProtein from "./img/icon_protein.png";

// styled-component
const ContainerLabel = styled.div`
  background: rgb(240, 248, 255);
  min-width: 1024px;
  min-height: 700px;
`;

export default function App(access) {
  let [userId, setUserId] = useState();

  const userData = useContext(UserContext);
  let userActivity, userAccount, userAverageSessions, userPerformance;
  if (userData !== undefined) {
    userAccount = userData.userAccount;
    userActivity = userData.userActivity;
    userAverageSessions = userData.userAverageSessions.sessions;
    userPerformance = userData.userPerformance.data;
  }

  switch (access.access) {
    case "activity":
      return (
        <UsersDataProvider id={userId}>
          <Header state={{ id: [userId, setUserId] }} />
          <div className="d-flex main-display">
            <SideMenu></SideMenu>
            <BarChart data={userActivity} />
          </div>
        </UsersDataProvider>
      );
    case "today-score":
      return (
        <UsersDataProvider id={userId}>
          <Header state={{ id: [userId, setUserId] }} />
          <div className="d-flex main-display">
            <SideMenu></SideMenu>
            <RadialChart data={userAccount} />
          </div>
        </UsersDataProvider>
      );
    case "average-sessions":
      return (
        <UsersDataProvider id={userId}>
          <Header state={{ id: [userId, setUserId] }} />
          <div className="d-flex main-display">
            <SideMenu></SideMenu>
            <LineChart data={userAverageSessions} />
          </div>
        </UsersDataProvider>
      );
    case "activities":
      return (
        <UsersDataProvider id={userId}>
          <Header state={{ id: [userId, setUserId] }} />
          <div className="d-flex main-display">
            <SideMenu></SideMenu>
            <RadarChart data={userPerformance} />
          </div>
        </UsersDataProvider>
      );
    case "key-data":
      return (
        <UsersDataProvider id={userId}>
          <Header state={{ id: [userId, setUserId] }} />
          <div className="d-flex main-display">
            <SideMenu></SideMenu>
            <AllCards
              iconCalories={iconCalories}
              iconCarbs={iconCarbs}
              iconFat={iconFat}
              iconProtein={iconProtein}
              userAccount={userAccount}
            />
          </div>
        </UsersDataProvider>
      );
    default:
      return (
        <UsersDataProvider id={userId}>
          <Header state={{ id: [userId, setUserId] }} />
          <div className="d-flex main-display">
            <SideMenu></SideMenu>
            <Home></Home>
          </div>
        </UsersDataProvider>
      );
  }
}
