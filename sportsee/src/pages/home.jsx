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




    }, [])

    

  return (
    <div>
        <Welcome></Welcome>
    </div>
    )
}



export default Home;