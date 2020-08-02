import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'



export default function TodoInput() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault() 
            dispatch({ type: 'ADD_ITEM', payload: { item: value }})
            setValue('')
        },
        [setValue, dispatch, value],
    )    

    return (
        <form onSubmit={onSubmit}>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button>Agregar item</button>
        </form>
    )
}
