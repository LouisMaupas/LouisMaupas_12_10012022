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

    /**
     * Call API with axios => https://github.com/axios/axios
     * Make a request for a user with a given ID
     */
    useEffect(() => {

        // TODO URL => 404
        // const axios = require('axios');
        // const apiURL = data
        // let userId = 18

        // axios.get(`${apiURL}`, {
        //      params: {
        //        ID: userId
        //      }
        //    })
        //    .then(function (response) {
        //      console.log(response);
        //    })
        //    .catch(function (error) {
        //     console.log(error);
        //   })           ; 

        // multiple concurrent requests
        // function getUserMainData() {
        //     return axios.get('/user/12345');
        //   }
          
        //   function getUserPerformance() {
        //     return axios.get('/user/12345/permissions');
        //   }          
        //   function getUserActivity() {
        //     return axios.get('/user/12345/permissions');
        //   }          
        //   function getUserAverageSessions() {
        //     return axios.get('/user/12345/permissions');
        //   }
          
        //   Promise.all([getUserMainData(), getUserPerformance(), getUserActivity(), getUserAverageSessions()])
        //     .then(function (results) {
        //       const userMainData = results[0],
        //       userPerformance = results[1],
        //       userActivity = results[2],
        //       userAverageSessions = results[3];
        //     });



        // TODO replace by axios
        fetch(data.USER_MAIN_DATA)
            .then((response) => response.json()
            .then(({ myData }) => console.log(myData))
            .catch((error) => console.log(error))
        )


    }, [])

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