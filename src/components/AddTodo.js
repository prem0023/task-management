import React, { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    onAddTodo({
      title: newTodo,
      todos: [],
    });
    setNewTodo("");
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        className="px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
      />
      <button
        onClick={handleAddTodo}
        className="px-2 py-1 ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
