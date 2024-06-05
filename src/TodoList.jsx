import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoInput, handleChangeStatus }) => {
  return (
    <ul>
      {todoInput.map((todo, i) => (
        <TodoItem
          value={todo.value}
          id={todoInput.id}
          completed={todo.completed}
          key={i}
          handleChangeStatus={handleChangeStatus}
        />
      ))}
    </ul>
  );
};

export default TodoList;
