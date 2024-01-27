/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function TodoItem(props) {
  // eslint-disable-next-line react/prop-types
  let todo = props.todo;
  // eslint-disable-next-line react/prop-types
  let inx = parseInt(props.indx) + 1;
  return (
    <>
      <tr>
        <th className="col-2">{inx}</th>
        <td className="col-4">{todo.name}</td>
        <td className="col-6">
          <div className="row">
            <div className="col-8">
              <p>{todo.desc}</p>
            </div>
            <div className="col-4">
              <button type="button" className="btn btn-outline-dark">
                Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}