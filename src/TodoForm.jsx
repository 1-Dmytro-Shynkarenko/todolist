import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

const TodoForm = () => {
  const [todoInput, setTodoInput] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: new Date(),
      value: value,
      completed: false,
    };
    setValue("");
    setTodoInput([...todoInput, newItem]);
  };
  const handleChangeStatus = (id) => {};
  return (
    <form onSubmit={addItem}>
      <h1>Здоров</h1>
      <input type="text" onChange={handleChange} value={value} />
      <button>Зберегти</button>
      <TodoList todoInput={todoInput} handleChangeStatus={handleChangeStatus} />
    </form>
  );
};

export default TodoForm;
