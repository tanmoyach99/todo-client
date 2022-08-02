import React from "react";

const TaskForm = ({ handleSubmit, task, setTask, desc, setDesc }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Task Name</label>
          <input
            type="text"
            name="task"
            id="task"
            value={task}
            className="form-control"
            onChange={(e) => setTask(e.target.value)}
            autoFocus
            required
            placeholder="Enter your Task"
          />
          <div className="form-group">
            <label htmlFor="name">Description</label>
            <textarea
              type="text"
              name="task"
              id="task"
              value={desc}
              className="form-control"
              onChange={(e) => setDesc(e.target.value)}
              autoFocus
              required
              placeholder="Enter your Task Description"
            />
          </div>

          <br />
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
