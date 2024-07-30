import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const getInitialTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (error) {
        console.error("Failed to parse todos from localStorage:", error);
        return [];
      }
    }
    return [];
  };

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(getInitialTodos());
  const [edit, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <Header />
        <Form 
          input={input} 
          setInput={setInput} 
          todos={todos} 
          setTodos={setTodos} 
          edit={edit} 
          setEditTodo={setEditTodo}
        />
        <ToDoList 
          todos={todos} 
          setTodos={setTodos} 
          setEditTodo={setEditTodo}
        />        
      </div>
    </div>
  );
}

export default App;
