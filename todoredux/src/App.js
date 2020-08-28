import React from 'react';
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListeTodo'
import './App.css';

function App() {
  return (
    <div className="App">
     <AddTodo/>
     <ListTodo/>
    </div>
  );
}

export default App;
