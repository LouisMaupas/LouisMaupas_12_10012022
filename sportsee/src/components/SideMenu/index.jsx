import { Link } from "react-router-dom";
import style from "./style.css"
import logo_yoga from "../../img/logo_yoga.jpg"
import logo_swim from "../../img/logo_swim.jpg"
import logo_bike from "../../img/logo_bike.jpg"
import logo_body from "../../img/logo_bodybulding.jpg"



export default function SideMenu() {
  return (
    <div className="side-menu d-flex flex-column justify-content-between">
      <div></div>
      <ul>
        <li><img src={logo_yoga} ></img></li>
        <li><img src={logo_swim} ></img></li>
        <li><img src={logo_bike} ></img></li>
        <li><img src={logo_body} ></img></li>
      </ul>
      <div className="copyright text-white">
        Copyright, Sportsee 2020
      </div>
    </div>
  )
}