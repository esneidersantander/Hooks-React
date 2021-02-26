import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import './example.css'
export const MemoHook = () => {
    const {counter, increment} = useCounter(1000)
    
    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>Memo Hook</h1>
            <hr/>
            <h1>Counter: <small>{counter}</small> </h1>
            <hr/>
            <p>{memoProcesoPesado}</p>
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
