import Header from "./components/Header"
import Home from "./pages/home/home"
import SideMenu from "./components/SideMenu"
import index from "./index.css"
import styled from "styled-components"
// import React, { useContext } from 'react';
import React from 'react';
import ReactDOM from "react-dom";
import userData from "./utils/context/index"


// styled-component
const ContainerLabel = styled.div`
  background: rgb(240,248,255);
  min-width: 1024px;
  min-height: 700px
`

export default function App() {

  // const value = useContext(MyContext);

  return (
    // <userData.Provider value={usersData.exemple}>
    <div>
        <Header></Header>
        <div className="d-flex">
          <SideMenu></SideMenu>
          <Home></Home>
        </div>
    </div>
    // </userData.Provider>
  );
}