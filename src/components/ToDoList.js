import React from 'react';

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
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li
            className={`list-item ${todo.completed ? 'bg-green-200 line-through' : ''}`}
            key={todo.id}
          >
            <input
              type='text'
              value={todo.title}
              className={`w-full bg-transparent border-none text-lg pl-2 mr-4 ${todo.completed ? 'text-black' : 'text-white'}`}
              readOnly
              style={{ userSelect: 'none' }} 
            />
            <div className='flex space-x-4 ml-auto'>
              <button
                type='button'
                className='text-2xl text-red-600'
                onClick={() => handleComplete(todo)}
              >
                <i className='fa fa-check-circle'></i>
              </button>
              <button
                type='button'
                className='text-2xl text-yellow-600'
                onClick={() => handleEdit(todo)}
              >
                <i className='fa fa-edit'></i>
              </button>
              <button
                type='button'
                className='text-2xl text-purple-500'
                onClick={() => handleDelete(todo.id)}
              >
                <i className='fa fa-trash'></i>
              </button>
              <button
                type='button'
                className='text-2xl text-green-600'
                onClick={() => moveUp(index)}
              >
                <i className='fa fa-arrow-up'></i>
              </button>
              <button
                type='button'
                className='text-2xl text-green-600'
                onClick={() => moveDown(index)}
              >
                <i className='fa fa-arrow-down'></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
