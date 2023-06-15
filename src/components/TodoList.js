import React from "react";
import NestedTodo from "./NestedTodo";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <NestedTodo key={index} nestedTodo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
