import React, { useCallback } from 'react'
import TodoItem from '../TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { selectItems, remove_item } from './../../features/todoListSlice'

export default function TodoList() {
    const list = useSelector(selectItems)
    const dispatch = useDispatch()
    
    const onClickRemove = useCallback((item) => {
        dispatch(remove_item(item))
    }, [dispatch])
    
    return (
        <div>
            {list && list.map(i => <TodoItem key={i.item} {...i} onClickRemove={onClickRemove}></TodoItem>)}
        </div>
    )
}
