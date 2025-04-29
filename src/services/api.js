import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // your backend url
});

export const uploadUsers = (users) => API.post('/users/upload', users);
export const createGroup = (group) => API.post('/groups/create', group);
export const sendMessage = (message) => API.post('/messages/send', message);
export const getUsers = () => API.get('/users');
