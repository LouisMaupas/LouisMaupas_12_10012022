import { Link } from "react-router-dom";
import logo_yoga from "../../img/logo_yoga.jpg";
import logo_swim from "../../img/logo_swim.jpg";
import logo_bike from "../../img/logo_bike.jpg";
import logo_body from "../../img/logo_bodybulding.jpg";
import styled from "styled-components";

// Styled component
const SideMenuContainer = styled.div`
  background-color: black;
  padding-bottom: 100px;
`;
const SideMenuCopyright = styled.div`
  transform: rotate(-90deg);
  font-size: 12px;
`;
const SideMenuUl = styled.ul`
  padding: 0;
`;

/**
 * SideMenu component
 * @returns
 */
export default function SideMenu() {
  return (
    <SideMenuContainer className="d-flex flex-column justify-content-between">
      <div></div>
      <SideMenuUl className="d-flex flex-column align-items-center">
        <li>
          <img src={logo_yoga} alt="logo"></img>
        </li>
        <li>
          <img src={logo_swim} alt="logo"></img>
        </li>
        <li>
          <img src={logo_bike} alt="logo"></img>
        </li>
        <li>
          <img src={logo_body} alt="logo"></img>
        </li>
      </SideMenuUl>
      <SideMenuCopyright className="text-white">
        Copyright, Sportsee 2020
      </SideMenuCopyright>
    </SideMenuContainer>
  );
}
