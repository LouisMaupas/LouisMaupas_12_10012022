// React
import { Link } from "react-router-dom";

// app
import Profil from "../Profil/index"

// stylesheet
import style from "./style.css"

// img
import logo from "../../img/logo.svg"



export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <img src={logo} ></img>
          <li><Link to="/">Accueil</Link></li>
          <li>
            Profil
            <Profil profils={['profil', 'profil2']} ></Profil>
          </li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}