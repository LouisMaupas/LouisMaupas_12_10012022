// React
import React, { useState, useEffect } from 'react';

// App
import Welcome from "../components/Welcome";
import data from "../backend/data_mocked";

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
        //     params: {
        //       ID: userId
        //     }
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   })
        //   .then(function () {
        //     // always executed
        //   }); 

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
        console.log(data.U)
        fetch(data.USER_MAIN_DATA)
            .then((response) => response.json()
            .then(({ myData }) => console.log(myData))
            .catch((error) => console.log(error))
        )


    }, [])

    

  return (
    <div>
        <Welcome></Welcome>
    </div>
    )
}



export default Home;