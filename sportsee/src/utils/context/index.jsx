import data from "../../backend/data_mocked"
import React, { useContext, useState, useEffect } from 'react';

const UserContext = React.createContext();

function UsersDataProvider(props) {

    const [dataUser, setDataUser] = useState()


    /**
     * Call API with axios => https://github.com/axios/axios
     * Make a request for a user with a given ID
     */
     useEffect(() => {
        const axios = require('axios');
        let userId = props;
        userId = 12
        let apiURL = `http://localhost:3000/user/${userId}`;
        axios.get(`${apiURL}`, {
        })
        .then(function (response) {
            // console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        }); 

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
        fetch(`http://localhost:3000/user/${userId}`)
            .then((response) => response.json()
            .then(({dataUser}) => console.log(dataUser))
            .catch((error) => console.log(error))
        )
    }, [])


    // // const setUserData = useState([]);
    const userData = {
         exemple: {
         name: "Alice",
         id: 123456
         }
     };

     console.log(props)

    return (
        <UserContext.Provider value={dataUser}>
            {props.children}
        </UserContext.Provider>
    );
}

export {UserContext, UsersDataProvider}
