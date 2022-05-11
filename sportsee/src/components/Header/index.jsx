// React
import { Link } from "react-router-dom";

// stylesheet
import style from "./style.css";

// img
import logo from "../../img/logo.svg";

import styled from "styled-components";
import { useState } from "react";

/**
 * Header component
 * @param {*} props
 * @returns
 */
export default function Header(props) {
  // styled-component
  const DivProfil = styled.div`
    color: white;
    &:hover {
      color: grey;
      cursor: pointer;
    }
  `;
  // Hook useStat : declares a state variable setState for the ID. The default value is 12.
  let {
    id: [userId, setUserId],
  } = {
    id: useState("12"),
    ...props.state,
  };

  return (
    <header>
      <nav>
        <ul>
          <img src={logo} alt={'logo'}></img>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            Profil : User {userId}
            <div>
              <DivProfil onClick={() => setUserId("12")}>User 12</DivProfil>
              <DivProfil onClick={() => setUserId("18")}>User 18</DivProfil>
            </div>
          </li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}
