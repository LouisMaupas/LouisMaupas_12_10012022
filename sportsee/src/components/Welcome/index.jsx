// import style from "./style.css"

import { useContext } from "react/cjs/react.development"
import { UserContext } from "../../utils/context"

export default function Welcome() {

  const userData = useContext(UserContext)

  console.log(userData)

  return (
    <div>
        Bonjour 
        {/* Bonjour {userData.userInfos.firstName} */}
    </div>
  )
}