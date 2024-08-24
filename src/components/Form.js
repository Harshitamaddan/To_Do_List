import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todos, setTodos, edit, setEditTodo }) => {

  const updateTodo = (title, id, completed) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title, completed } : todo
    );
    setTodos(updatedTodos);
    setEditTodo(null);
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [edit, setInput]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    } else {
      updateTodo(input, edit.id, edit.completed);
    }
    setInput("");
  };

  return (
    <div className="form-container">
      <form onSubmit={onFormSubmit} className="form-flex">
        <input
          type="text"
          placeholder="Enter a task..."
          className="task-input"
          value={input}
          required
          onChange={onInputChange}
        />
        <button type="submit" className="button-add">
          {edit ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
}

export default Form;
