import React, { useCallback } from 'react'
import TodoItem from '../TodoItem'
import { useSelector, useDispatch } from 'react-redux'


export default function TodoList() {
    const list = useSelector(state => state.items)
    const dispatch = useDispatch()
    
    const onClickRemove = useCallback((item) => {
        dispatch({ type: "REMOVE_ITEM", payload: item })
    }, [dispatch])
    
    return (
        <div>
            {list && list.map(i => <TodoItem key={i.item} {...i} onClickRemove={onClickRemove}></TodoItem>)}
        </div>
    )
}
