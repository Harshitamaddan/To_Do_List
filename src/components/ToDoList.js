import React from 'react';
import './ToDoList.css';

function ToDoList({ todos, setTodos, setEditTodo }) {

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const newTodos = [...todos];
    const temp = newTodos[index];
    newTodos[index] = newTodos[index - 1];
    newTodos[index - 1] = temp;
    setTodos(newTodos);
  };

  const moveDown = (index) => {
    if (index === todos.length - 1) return;
    const newTodos = [...todos];
    const temp = newTodos[index];
    newTodos[index] = newTodos[index + 1];
    newTodos[index + 1] = temp;
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <ul className="todo-list-items">
        {todos.map((todo, index) => (
          <li
            className={`list-item ${todo.completed ? 'completed' : ''}`}
            key={todo.id}
          >
            <input
              type="text"
              value={todo.title}
              className={`todo-item-input ${todo.completed ? 'completed-text' : 'pending-text'}`}
              readOnly
              style={{ userSelect: 'none' }}
            />
            <div className="todo-buttons">
              <button 
                type="button" 
                className="button-complete"
                onClick={() => handleComplete(todo)}
              >
                <i className="fas fa-check-circle"></i>
              </button>
              <button 
                type="button" 
                className="button-edit"
                onClick={() => handleEdit(todo)}
              >
                <i className="fas fa-edit"></i>
              </button>
              <button 
                type="button" 
                className="button-delete"
                onClick={() => handleDelete(todo.id)}
              >
                <i className="fas fa-trash"></i>
              </button>
              <button 
                type="button" 
                className="button-move-up"
                onClick={() => moveUp(index)}
              >
                <i className="fas fa-arrow-up"></i>
              </button>
              <button 
                type="button" 
                className="button-move-down"
                onClick={() => moveDown(index)}
              >
                <i className="fas fa-arrow-down"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
