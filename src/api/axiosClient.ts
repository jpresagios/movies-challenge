import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sideproject-movies-api.herokuapp.com/',
});

export default instance;
