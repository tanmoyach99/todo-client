import React, { useState } from "react";

import { useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";
import { getIndividualTask, updateTask } from "../functions/taskcrud";
import TaskForm from "./TaskForm";

const TaskUpdateForm = ({ match }) => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  console.log(id);
  const loadTask = () =>
    getIndividualTask(id).then((t) => setTask(t.data.task));

  const history = useHistory();

  useEffect(() => {
    loadTask();
    // console.log(match);
  }, []);

  console.log(id, task);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(id, task);

    updateTask(id, { task, desc })
      .then((res) => {
        setTask("");
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" container container-fluid p-5 ">
      <div className="row">
        <div className="col-md-10">
          <h4> Update Task</h4>
          <TaskForm
            handleSubmit={handleSubmit}
            task={task}
            setTask={setTask}
            desc={desc}
            setDesc={setDesc}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskUpdateForm;
