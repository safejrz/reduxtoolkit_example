import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { add_item } from '../../App'



export default function TodoInput() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault() 
            dispatch(add_item(value))
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
