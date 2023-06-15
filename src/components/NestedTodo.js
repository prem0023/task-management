import React, { useState } from "react";
import AddTodo from "./AddTodo";

const NestedTodo = ({ nestedTodo }) => {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [nestedTodos, setNestedTodos] = useState([]);

  const handleToggleAddTodo = () => {
    setShowAddTodo(!showAddTodo);
  };

  const handleAddNestedTodo = (newTodo) => {
    setNestedTodos([...nestedTodos, newTodo]);
  };

  return (
    <li>
      {nestedTodo.title}
      <button onClick={handleToggleAddTodo} className="ml-2 text-blue-500">
        {showAddTodo ? "Cancel" : "Add Todo"}
      </button>
      {showAddTodo && <AddTodo onAddTodo={handleAddNestedTodo} />}
      {nestedTodos.length > 0 && (
        <ul className="ml-4">
          {nestedTodos.map((todo, index) => (
            <NestedTodo key={index} nestedTodo={todo} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NestedTodo;
