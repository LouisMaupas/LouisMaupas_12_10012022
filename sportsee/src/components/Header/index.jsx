// React
import { Link } from "react-router-dom";

// style
import style from "./style.css";
import styled from "styled-components";

// img
import logo from "../../img/logo.svg";

/**
 * Header component
 * @param {*} props
 * @returns
 */
export default function Header(props) {
  // styled-component
  const HeaderContainer = styled.header`
    height: 10vh;
    width: 100%;
    background-color: black;
    display: flex;
    align-items: center;
  `;
  const HeaderNav = styled.nav`
    width: 100%;
  `;
  const HeaderUl = styled.ul`
    list-style: none;
    margin: 0;
    margin-right: 1rem;
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  `;
  const HeaderLi = styled.li`
    list-style-type: none;
    display: block;
    font-size: 1.25rem;
  `;

  // get user Id from localstorage
  const userId = JSON.parse(localStorage.getItem("userId"));
  return (
    <HeaderContainer>
      <HeaderNav>
        <HeaderUl>
          <img src={logo} alt={"logo"}></img>
          <Link className="header__link" to={`/user/${userId}`}>
            Accueil
          </Link>
          <HeaderLi>Profil</HeaderLi>
          <HeaderLi>Réglage</HeaderLi>
          <HeaderLi>Communauté</HeaderLi>
        </HeaderUl>
      </HeaderNav>
    </HeaderContainer>
  );
}
