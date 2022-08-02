import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { createTodo, getTaskList, removeTask } from "../functions/taskcrud";

const Home = () => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState([
    "Completed",
    "Running",
    "Not Completed",
  ]);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const history = useHistory();

  const [desc, setDesc] = useState("");

  const loadTasks = () => getTaskList().then((c) => setTasks(c.data));
  console.log(tasks);

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    createTodo({ task, desc })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        loadTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemove = async (id) => {
    if (window.confirm("Are you sure you want to remove")) {
      removeTask(id)
        .then((res) => {
          console.log(res);
          loadTasks();
        })
        .catch((err) => console.log(err));
    }
  };
  const updateFormRedirect = (id) => {
    history.push(`/${id}`);
    window.location.reload();
  };

  return (
    <div className="p-5 container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h4> Create Task List</h4>

            <TaskForm
              handleSubmit={handleSubmit}
              task={task}
              setTask={setTask}
              desc={desc}
              setDesc={setDesc}
              status={status}
              setStatus={setStatus}
            />

            <div className="mt-5">
              {" "}
              {tasks.map((t) => (
                <div className="card row d-flex " key={t._id}>
                  <div className="col-md-6">
                    <h3>{t.task}</h3>
                    <p>{t.description}</p>
                  </div>
                  <div className="col-md-4">
                    <div className="float-end">
                      <button
                        className="btn btn-warning"
                        onClick={() => handleRemove(t._id)}
                      >
                        delete
                      </button>
                    </div>
                    <div
                      className="float-end btn btn-dark me-2"
                      onClick={() => updateFormRedirect(t._id)}
                    >
                      Edit
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
