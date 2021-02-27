import React, { useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer';


const initialState=[{
    id: new Date().getTime(),
    desc: "aprender react",
    done: false
}] 

export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState);
    
    console.log(todos);
    
    return (
        <div>
            <h1>todoa</h1>
            <hr/>
            <ul>
                <li>hola </li>
                <li>como </li>
                <li>eswtas</li>
            </ul>
        </div>
    )
}
