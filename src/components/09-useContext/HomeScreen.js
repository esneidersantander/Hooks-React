import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const userContext = useContext(UserContext)
    console.log(userContext);
    return (
        <div>
            HomeScreen
        </div>
    )
}
