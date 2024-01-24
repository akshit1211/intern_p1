// eslint-disable-next-line no-unused-vars
import React from "react";

export default function AddTodo() {
  return (
    <div className="pt-4 pb-4">
      <form>
        <div className="row">
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              defaultValue="Add Task.."
            />
          </div>

          <div className="col-5">
            <input
              type="date"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="col-2">
            <div className="d-grid gap-2">
              <button className="btn btn-success" type="button">
                Button
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}