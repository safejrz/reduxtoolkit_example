import React from 'react';
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import './App.css'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const initialValue = { items: []}
/*
const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload]}
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.item !== action.payload)}
    default:
      return state
  }
}
*/

const todoItemsSlice = createSlice({
  name: 'todoItems',
  initialState: initialValue, 
  reducers: {
    add_item: (state, action) => {
      state.items.push({item: action.payload})
    },
    remove_item: (state, action) => {
      state.items = state.items.filter(i => i.item !== action.payload)
    }

  }
})

export const { add_item, remove_item } = todoItemsSlice.actions

export const selectItems = state => state.todoItems.items

const todoItemsReducer = todoItemsSlice.reducer

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = configureStore({
  reducer: {
    todoItems: todoItemsReducer
  }
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    </Provider>
  );
}

export default App;
