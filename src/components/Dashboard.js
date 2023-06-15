import React, { useState } from "react";
import TodoListContainer from "./TodoListContainer";
import Header from "./Header";

const Dashboard = () => {
  const [todoListContainers, setTodoListContainers] = useState([]);

  const addNewTodoListContainer = () => {
    setTodoListContainers([
      ...todoListContainers,
      <TodoListContainer
        key={todoListContainers.length + 1}
        id={todoListContainers.length + 1}
        onSelect={deleteTodo}
      />,
    ]);
  };

  const deleteTodo = (id) => {
    setTodoListContainers((oldItem) => {
      return oldItem.filter((item, index) => id != item?.key);
    });
  };

  return (
    <div>
      <Header onAddNewTodo={addNewTodoListContainer} />
      <div className="flex flex-wrap justify-center">
        {todoListContainers.map((todoListContainer, index) => (
          <div className="m-2" key={index}>
            {todoListContainer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
