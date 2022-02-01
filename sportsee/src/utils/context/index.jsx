import data from "../../backend/data_mocked"
import React, { useContext, useState, useEffect } from 'react';

const UserContext = React.createContext();

/**
 * Get User ID as param and return user data 
 * @param {*} props User ID
 * @returns 
 */
function UsersDataProvider(props) {

    const [userData, setUserData] = useState()

    /**
     * Call API with axios => https://github.com/axios/axios
     * Make a request for a user with a given ID
     */
     useEffect(() => {
        const axios = require('axios');
        console.log(props)
        let userId = props.userId;
        // let apiURL = `http://localhost:3000/user/${userId}`;
        // axios.get(`${apiURL}`, {
        // })
        // .then(function (response) {
        //     // console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // }); 

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
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:3000/user/${userId}`
            )
            console.log(result)

            setUserData(result.data.data)
        }

        fetchData()

    }, [])

    // const userData = {
    //      exemple: {
    //      name: "Alice",
    //      id: 123456
    //      }
    //  };

     console.log(userData)

    return (
        <UserContext.Provider value={userData}>
            {props.children}
        </UserContext.Provider>
    );
}

export {UserContext, UsersDataProvider}
