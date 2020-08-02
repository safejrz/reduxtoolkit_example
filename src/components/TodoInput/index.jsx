import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

const TodoInput = ({ addItem }) => {
    const [value, setValue] = useState('')

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault() 
            addItem(value)
            setValue('')
        },
        [setValue, addItem, value],
    )    

    return (
        <form onSubmit={onSubmit}>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button>Agregar item</button>
        </form>
    )
}

export default connect(null, dispatch => ({
    addItem: value => dispatch({ type: 'ADD_ITEM', payload: { item: value }})
}))(TodoInput)