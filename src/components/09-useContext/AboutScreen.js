import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const {user, setUser} = useContext(UserContext)
    return (
        <div>
            AboutScreen
            <hr/>

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button 
                className="btn btn-primary"
                type="button"
                onClick={()=>setUser({})}
            >
                Logout
            </button>
        </div>
    )
}
