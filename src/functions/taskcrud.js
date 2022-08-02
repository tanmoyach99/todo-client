import axios from "axios";

export const getTaskList = async () => {
  return await axios.get("http://localhost:8000/api/tasks");
};
export const getIndividualTask = async (id) => {
  return await axios.get(`http://localhost:8000/api/${id}`);
};

export const removeTask = async (id) => {
  return await axios.delete(`http://localhost:8000/api/task/${id}`);
};

export const updateTask = async (id, task) => {
  return await axios.put(`http://localhost:8000/api/task/${id}`, task);
};

export const createTodo = async (task) => {
  return await axios.post(`http://localhost:8000/api/task`, task);
};
