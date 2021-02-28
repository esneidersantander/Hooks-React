import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser} = useContext(UserContext)
    const newUser={
        id:123,
        name:"juanito"
    }
    return (
        <div>
            LoginScreen
            <hr/>
            <button 
                className="btn btn-primary"
                type="button"
                onClick={()=>setUser(newUser)}
            >
                Login
            </button>
        </div>
    )
}
