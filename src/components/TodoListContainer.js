import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const TodoListContainer = ({ onSelect, id }) => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container w-96 mx-auto p-4 mt-5 bg-slate-200 rounded-lg">
      <div className="flex justify-between mb-3">
        <h1 className="text-purple-600 text-xl font-bold">Todo List</h1>
        <button onClick={() => onSelect(id)} className="hover:text-red-700">
          X
        </button>
      </div>
      <div className="mb-4">
        <AddTodo onAddTodo={handleAddTodo} />
      </div>
      <div>
        <h2 className=" text-base font-bold">List Items</h2>
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default TodoListContainer;
