import React, { useRef } from 'react'
import './focus.css'
export const FocusScreen = () => {
    
    const inputRef = useRef()
    const handleClick=()=>{
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input
                ref={inputRef} 
                type="text"
                className="form-control"
                placeholder="su nombre"
            />
            <hr/>
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}
