// eslint-disable-next-line no-unused-vars
import React from "react";

import Title from "./Components/Title";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

export default function App() {
  const todolist = [
    {
      name: "Computer",
      desc: "Computer is a Electronic Device",
    },
    {
      name: "Software",
      desc: "Software is set of instruction",
    },
  ];
  return (
    <>
      <div className="shadow p-3 mb-5  rounded  bg-white container">
        <center>
          <Title />
          <AddTodo />
          <TodoList todolist={todolist} />
        </center>
      </div>
    </>
  );
}