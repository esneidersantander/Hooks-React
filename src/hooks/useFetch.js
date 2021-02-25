import { useEffect, useState } from 'react'

const initialState = {loading:true, error: null, data:null}

export const useFetch = (url) => {

    const [state, setState] = useState(initialState)

    useEffect(() => {
        
        setState(initialState)

        fetch(url)
        .then(resp=> resp.json())
        .then(data=>{
            setState({
                error:null,
                loading:false,
                data
            })
        })
    }, [url])

    return state;
}
