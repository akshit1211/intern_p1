/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import TodoItem from "./TodoItem";

// eslint-disable-next-line react/prop-types
export default function TodoList({ todolist }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="col-2">S.NO</th>
            <th className="col-4">Title</th>
            <th className="col-6">Description</th>
          </tr>
        </thead>
        <tbody>
          {/* eslint-disable-next-line react/prop-types*/}
          {todolist.map((item, index) => {
            // eslint-disable-next-line react/jsx-key
            return <TodoItem todo={item} indx={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}