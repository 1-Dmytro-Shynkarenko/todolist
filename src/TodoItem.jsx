import React from "react";

const TodoItem = ({ value, completed, handleChangeStatus, id }) => {
  return (
    <li
      style={
        completed
          ? { width: "100%", height: "60px", border: "1px solid pink" }
          : { width: "100%", height: "60px", border: "1px solid black" }
      }
      onClick={handleChangeStatus(id)}
    >
      {value} <button>X</button>
    </li>
  );
};

export default TodoItem;
