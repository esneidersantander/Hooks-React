import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import './example.css'
import { Small } from './Small'
export const Memorize = () => {
    const {counter, increment} = useCounter(1)
    
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Counter: <Small value={counter} /></h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={()=>{
                    setShow(!show)
                }}
            >
                Show {JSON.stringify(show)}
            </button>
        </div>
    )
}
