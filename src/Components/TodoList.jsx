// eslint-disable-next-line no-unused-vars
import React from "react";
import TodoItem1 from "./TodoItem1";
// import TodoItem2 from "./TodoItem2";

export default function TodoList() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col-2">S.NO</th>
            <th scope="col-4">Title</th>
            <th scope="col-6">Description</th>
          </tr>
        </thead>
        <tbody>
          <TodoItem1 />
          {/* <TodoItem2/> */}
        </tbody>
      </table>
    </div>
  );
}