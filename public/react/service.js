import axios from 'axios';

export const deleteNote = (id) => {
  return axios.delete(`/notes/${id}`)
    .then(resp => resp.data.success);
};

export const getNotes = () => {
  return axios.get('/notes')
    .then(resp => resp.data.results)
};

export const getNote = (id) => {
  return axios.get(`/notes/${id}`)
    .then(resp => resp.data.result);
};

export const editNote = (id, body) => {
  return axios.put(`/notes/${id}`, body)
    .then(resp => resp.data.success);
};

export const addNote = (body) => {
  return axios.post('/notes', body)
    .then(resp => resp.data.success);
};
