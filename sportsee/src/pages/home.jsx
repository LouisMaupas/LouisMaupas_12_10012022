// React
import React, { useState, useEffect } from 'react';

// App
import Welcome from "../components/Welcome";
import data from "../backend/data_mocked";



// Component
function Home() {

    // Call API
    useEffect(() => {
        fetch(data)
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