import axios from "axios";

export const getTaskList = async () => {
  return await axios.get(
    "https://whispering-reef-72322.herokuapp.com/api/tasks"
  );
};
export const getIndividualTask = async (id) => {
  return await axios.get(
    `https://whispering-reef-72322.herokuapp.com/api/${id}`
  );
};

export const removeTask = async (id) => {
  return await axios.delete(
    `https://whispering-reef-72322.herokuapp.com/api/task/${id}`
  );
};

export const updateTask = async (id, task) => {
  return await axios.put(
    `https://whispering-reef-72322.herokuapp.com/api/${id}`,
    task
  );
};

export const createTodo = async (task) => {
  return await axios.post(
    `https://whispering-reef-72322.herokuapp.com/api/task`,
    task
  );
};
