import React from 'react';
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
//import { store } from './store';
//import { createApi } from '@reduxjs/toolkit/query'

const initialValue = {
  items: [{ item: 'uno'}, { item: 'dos'}, { item: 'tres'}]
} //useSelector(selectItems) () => TodoList //[]

const reducer = (state = initialValue, action) => {
  return state
}

const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
