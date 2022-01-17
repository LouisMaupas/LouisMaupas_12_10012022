import { createContext, useContext } from "react";


export const Context = createContext()

export const UserData = ({ id }) => {
 
    // const value = useContext()
    // const value = {
    //     id,
    //     userInfos,
    //     score,
    //     keyData
    // } = value

    return (
        <Context.Provider value={{ id }}>
            {id}
        </Context.Provider>
    )
}