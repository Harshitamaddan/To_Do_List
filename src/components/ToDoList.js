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

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            className={`list-item ${todo.completed ? 'bg-green-200 line-through' : ''}`}
            key={todo.id}
          >
            <input
              type='text'
              value={todo.title}
              className={`w-full bg-transparent border-none text-lg pl-2 mr-4 ${todo.completed ? 'text-black' : 'text-white'}`}
              readOnly
              style={{ userSelect: 'none' }}  // Prevent text selection
            />
            <div className='flex space-x-4 ml-auto'>
              <button
                type='button'
                className='text-2xl text-pink-400'
                onClick={() => handleComplete(todo)}
              >
                <i className='fa fa-check-circle'></i>
              </button>
              <button
                type='button'
                className='text-2xl text-yellow-400'
                onClick={() => handleEdit(todo)}
              >
                <i className='fa fa-edit'></i>
              </button>
              <button
                type='button'
                className='text-2xl text-blue-200'
                onClick={() => handleDelete(todo.id)}
              >
                <i className='fa fa-trash'></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
