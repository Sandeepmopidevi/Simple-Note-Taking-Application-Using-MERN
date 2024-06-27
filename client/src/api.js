import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  
});

export const getNotes = () => api.get('/notes');
export const createNote = (note) => api.post('/notes', note);
export const deleteNote = (id) => api.delete(`/notes/${id}`);
export const updateNote = (id, note) => api.put(`/notes/${id}`, note);
