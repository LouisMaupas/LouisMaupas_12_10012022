// React
import React, { useState, useEffect } from 'react';
import { useContext } from "react/cjs/react.development"

// Ext
import styled from "styled-components";

// Img
import iconCalories from "../../img/icon_calories.png"
import iconCarbs from "../../img/icon_carbs.png"
import iconFat from "../../img/icon_fat.png"
import iconProtein from "../../img/icon_protein.png"

// App
import Welcome from "../../components/Welcome";
import data from "../../backend/data_mocked";
import DailyMotivation from '../../components/DailyMotivation';
import Card from "../../components/Cards/index"
import BarChart from '../../components/Charts/BarChart';
import Chart from "../../components/Charts/LineChart/index";
import { UserContext } from "../../utils/context"



// Component
function Home() {

        // Get user data
        let userData = useContext(UserContext)

        // styled-component
        const HomeLabel = styled.div`
        margin-left: 109px;
        margin-top: 68px;
        `
        const ChartsContainer = styled.div`
        margin-right: 63px
        `
    console.log(userData)
  return (
    <HomeLabel>
        <div>
          <Welcome userName={userData.id ? userData.userInfos.firstName : null} ></Welcome>
          <DailyMotivation></DailyMotivation>
        </div>
        <div className='d-flex'>
            <ChartsContainer>
                <BarChart data={userData}></BarChart>
                <div className='d-flex justify-content-between' >
                    <Chart type={'line'}></Chart>
                    <Chart></Chart>
                    <Chart></Chart>
                </div>
            </ChartsContainer>
            <div>
                <Card image={iconCalories} value={userData.keyData ? userData.keyData.calorieCount : null} type={'Calories'} ></Card>
                <Card image={iconProtein} value={userData.keyData ? userData.keyData.carbohydrateCount : null} type={'Proteines'} ></Card>
                <Card image={iconCarbs} value={userData.keyData ? userData.keyData.lipidCount : null} type={'Glucides'} ></Card>
                <Card image={iconFat} value={userData.keyData ? userData.keyData.proteinCount : null} type={'Lipides'} ></Card>
            </div>
        </div>
    </HomeLabel>
    )
}

export default Home;