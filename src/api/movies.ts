import axios from './axiosClient';
import Movie from '../interfaces/movie';

const fetchMovies = async (): Promise<Movie[]> => {
  const { data } = await axios.get('');
  return data;
};

export default fetchMovies;
