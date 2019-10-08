import React from 'react';
import './App.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <Todos/>
      <TodoForm/>
    </div>
  );
}

export default App;
