import data from "../../backend/data_mocked"
import React, { useContext, useState, useEffect } from 'react';

const UserContext = React.createContext();

/**
 * Get User ID as param and return user data 
 * @param {*} props User ID
 * @returns 
 */
function UsersDataProvider(props) {
    let [userData, setUserData] = useState(12)
    let [id, setId]= useState(props.id)
    setId = props.id

    /**
     * Call API with axios => https://github.com/axios/axios
     * Make a request for a user with a given ID
     */
     useEffect(() => {

        let userId = 12
        if (props.id === undefined) {
            userId = 12;
        } else {
            userId = props.id
        }

        const url = `http://localhost:3000`,
            axios = require('axios');


        function getUserAccount() {
            return axios.get(`${url}/user/${userId}`);
          }
          
          function getUserActivity() {
            return axios.get(`${url}/user/${userId}/activity`);
          }

          function getUserAverageSessions() {
              return axios.get(`${url}/user/${userId}/average-sessions`)
          }

          function getUserPerformance() {
            return axios.get(`${url}/user/${userId}/performance`)
          }
          
          Promise.all([getUserAccount(), getUserActivity(), getUserAverageSessions(), getUserPerformance()])
            .then(function (results) {
              const account = results[0];
              const activity = results[1];
              const averageSessions = results[2];
              const performance = results[3];
              console.log(results)
            });
        // const axios = require('axios');
        // let userId = 12
        // if (props.id === undefined) {
        //     userId = 12;
        // } else {
        //     userId = props.id
        // }
        // // TODO replace by axios
        // const fetchData = async () => {
        //     const result = await axios(
        //         `http://localhost:3000/user/${userId}`
        //     )
        //     setUserData(result.data.data)
        // }
        // fetchData()
    }, ['id'])
    console.log(userData)
    let test = 'test!'
    return (
        <UserContext.Provider value={userData} activity={test}>
            {props.children}
        </UserContext.Provider>
    );
}

export {UserContext, UsersDataProvider}
