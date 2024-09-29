import React, { useCallback } from 'react'
import TodoItem from '../TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { selectItems, remove_item } from './../../features/todoListSlice'
import { connect } from 'react-redux'

const TodoList = ({ list }) => {
    //const list = [{ item: 'uno' }, { item: 'dos' }, { item: 'tres' }]

    const onClickRemove = useCallback((item) => {
    }, [])

    return (
        <div>
            {list && list.map(i => <TodoItem key={i.item} {...i} onClickRemove={onClickRemove}></TodoItem>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.items
    }
}

export default connect(mapStateToProps)(TodoList)