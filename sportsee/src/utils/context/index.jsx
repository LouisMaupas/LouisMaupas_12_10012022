import data from "../../backend/data_mocked";
import React, { useContext, useState, useEffect } from "react";

const UserContext = React.createContext();

/**
 * Get User ID as param and return user data
 * @param {*} props User ID
 * @returns
 */
function UsersDataProvider(props) {
  const [userAccount, setUserAccount] = useState(12);
  const [userActivity, setUserActivity] = useState([]);
  const [userAverageSessions, setUserAverageSessions] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);

  /**
   * Call API with axios (https://github.com/axios/axios)
   * Make a request for a user with a given ID
   */
  useEffect(() => {
    let userId = 12;
    if (props.id === undefined) {
      userId = 12;
    } else {
      userId = props.id;
    }

    const url = `http://localhost:3000`,
      axios = require("axios");

    function getUserAccount() {
      return axios.get(`${url}/user/${userId}`);
    }

    function getUserActivity() {
      return axios.get(`${url}/user/${userId}/activity`);
    }

    function getUserAverageSessions() {
      return axios.get(`${url}/user/${userId}/average-sessions`);
    }

    function getUserPerformance() {
      return axios.get(`${url}/user/${userId}/performance`);
    }

    Promise.all([
      getUserAccount(),
      getUserActivity(),
      getUserAverageSessions(),
      getUserPerformance(),
    ])
      .then(function (results) {
        setUserAccount(results[0].data.data);
        setUserActivity(results[1].data.data);
        setUserAverageSessions(results[2].data.data);
        setUserPerformance(results[3].data.data);
      })
      .catch((error) => {
        if (error.response) {
          //response status is an error code
          console.log(error.response.status);
        } else if (error.request) {
          //response not received though the request was sent
          console.log(error.request);
        } else {
          //an error occurred when setting up the request
          console.log(error.message);
        }
      });
  }, [props.id]);
  return (
    <UserContext.Provider
      value={{
        userAccount,
        userActivity,
        userAverageSessions,
        userPerformance,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UsersDataProvider };
