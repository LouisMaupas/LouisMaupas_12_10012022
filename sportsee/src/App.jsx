import Header from "./components/Header"
import Home from "./pages/home/home"
import SideMenu from "./components/SideMenu"
import index from "./index.css"
import styled from "styled-components"
import React from 'react';
import ReactDOM from "react-dom";
import {UsersDataProvider} from "./utils/context/index"
import { useState } from "react"


// styled-component
const ContainerLabel = styled.div`
  background: rgb(240,248,255);
  min-width: 1024px;
  min-height: 700px
`

export default function App() {

  const [userId, setUserId] = useState();

  return (
    <UsersDataProvider id={userId}>
    <div>
        <Header state={{ id: [userId, setUserId] }} />
        <div className="d-flex">
          <SideMenu></SideMenu>
          <Home></Home>
        </div>
    </div>
    </UsersDataProvider>
  );
}