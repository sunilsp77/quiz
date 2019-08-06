import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
});

export default instance;
