import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => axios.get(baseUrl);

const create = (newPerson) => axios.post(baseUrl, newPerson);

const remove = (id) => axios.delete(`${baseUrl}/${id}`);

const update = (id, updatedPerson) => axios.put(`${baseUrl}/${id}`, updatedPerson)

export default {
  getAll,
  create,
  remove,
  update
};
