import React from "react";
import { createContext, useContext, useReducer} from "react";
import {userReducer} from './Reducer'

const User = createContext();

const Context = ({children}) => {

    const initState = {username: '', isAuth: false};
    const [state, dispatch] = useReducer(userReducer, initState)

    return  <User.Provider value={{state, dispatch}}>
                {children}
            </User.Provider>
}

export default Context;

export const UserState = () => {
    return useContext(User)
}