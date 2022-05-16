// React
import { Link } from "react-router-dom";

// stylesheet
import style from "./style.css";

// img
import logo from "../../img/logo.svg";

import styled from "styled-components";

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

  // get user Id from localstorage
  const userId = JSON.parse(localStorage.getItem("userId"));

  return (
    <header>
      <nav>
        <ul>
          <img src={logo} alt={"logo"}></img>
          <Link to={`/user/${userId}`}>Accueil</Link>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}
