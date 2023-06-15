import React from "react";

const Todo = ({ todo }) => {
  return <li className="bg-gray-100">{todo.title}</li>;
};

export default Todo;
