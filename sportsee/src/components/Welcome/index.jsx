// import style from "./style.css"

import { useContext } from "react/cjs/react.development"
import { UserContext } from "../../utils/context"

export default function Welcome() {

  let userData = useContext(UserContext)
  return (
    <div>
        Bonjour { userData.id ? userData.userInfos.firstName : 'Veuillez choisir un profil.'}
    </div>
  )
}