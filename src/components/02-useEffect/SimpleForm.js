import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message';
export const SimpleForm = () => {
    const [formState, setFormState] = useState({name:"", email:""});
    const {name, email}= formState;

    useEffect(() => {
        console.log("carga en cada cambio del componenet");
    })
    useEffect(() => {
        console.log("carga soolo al inicio");
    }, [])
    useEffect(() => {
        console.log("carga cuando cambia el formstate");
    }, [formState])
    useEffect(() => {
        console.log("carga cuando cambia el email");
    }, [email])

    const handleInputChange=({target})=>{
        setFormState({
            ...formState,
            [target.name]:target.value
        })
    }

    return (
        <>
            <h1>UseEffect</h1>
            <hr/>
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>        
            <div className="form-group">
                <input 
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>    

            {
                (name === "123")
                    && <Message/>
            }    
        </>
    )
}
