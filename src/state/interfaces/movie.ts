import Movie from '../../interfaces/movie';
import SearchFields from '../../interfaces/searchFields';
import SortFields from '../../interfaces/sortFields';

export default interface MovieStore {
  movieStore: MovieState;
}

export interface MovieState {
  movieDetail?: Movie;
  movies: Movie[];
  sortFields: SortFields;
  searchFields: SearchFields;
  loadingMovies: boolean;
  errors: string;
}
