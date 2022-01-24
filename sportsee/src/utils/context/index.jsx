import data from "../../backend/data_mocked"
import React from 'react';


//    const value = {
//         id,
//         userInfos,
//         score,
//         keyData
//      } = value

const usersData = React.createContext(data)


export default function DataUsers() {
    return (
        usersData
    )
  }