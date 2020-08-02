import React, { useCallback } from 'react'
import TodoItem from '../TodoItem'
import { connect } from 'react-redux'

const TodoList = ({ removeItem, list }) => {
    //const list = useSelector(state => state.items)
    
    const onClickRemove = useCallback((item) => {
        removeItem(item)        
    }, [removeItem])
    
    return (
        <div>
            {list && list.map(i => <TodoItem key={i.item} {...i} onClickRemove={onClickRemove}></TodoItem>)}
        </div>
    )
}

export default connect(state => {
    return {
        list: state.items
    }
}, dispatch => {
    return ({
        removeItem: item => dispatch({ type: "REMOVE_ITEM", payload: item })
    })
})(TodoList)
