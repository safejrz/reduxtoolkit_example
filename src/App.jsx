import React from 'react';
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store';

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
