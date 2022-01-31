// React
import React, { useState, useEffect } from 'react';

// Ext
import styled from "styled-components";

// Img

// App
import Welcome from "../../components/Welcome";
import data from "../../backend/data_mocked";
import DailyMotivation from '../../components/DailyMotivation';
import Card from "../../components/Cards/index"
import BarChart from '../../components/Charts/BarChart';
import Chart from "../../components/Charts/LineChart/index"

// Component
function Home() {


        // styled-component
        const HomeLabel = styled.div`
        margin-left: 109px;
        margin-top: 68px;
        `
        const ChartsContainer = styled.div`
        margin-right: 63px
        `

        const firstChartData = {
            sessions: [
                {
                    day: 1,
                    sessionLength: 30
                },
                {
                    day: 2,
                    sessionLength: 23
                },
                {
                    day: 3,
                    sessionLength: 45
                },
                {
                    day: 4,
                    sessionLength: 50
                },
                {
                    day: 5,
                    sessionLength: 0
                },
                {
                    day: 6,
                    sessionLength: 0
                },
                {
                    day: 7,
                    sessionLength: 60
                }
            ]
        }
    

  return (
    <HomeLabel>
        <div>
          <Welcome></Welcome>
          <DailyMotivation></DailyMotivation>
        </div>
        <div className='d-flex'>
            <ChartsContainer>
                <BarChart></BarChart>
                <div className='d-flex justify-content-between' >
                    <Chart type={'line'} data={firstChartData}></Chart>
                    <Chart></Chart>
                    <Chart></Chart>
                </div>
            </ChartsContainer>
            <div>
                <Card image={'a'} type={'Calories'} value={999} ></Card>
                <Card image={'a'} type={'Protéines'} value={999} ></Card>
                <Card image={'a'} type={'Glucides'} value={999} ></Card>
                <Card image={'a'} type={'Lipides'} value={999} ></Card>
            </div>
        </div>
    </HomeLabel>
    )
}

export default Home;