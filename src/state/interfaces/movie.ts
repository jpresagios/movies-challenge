import Movie from '../../interfaces/movie';
import SearchFields from '../../interfaces/searchFields';

export default interface MovieStore {
  movieStore: MovieState;
}

export interface MovieState {
  movies: Movie[];
  sortFields: any;
  searchFields: SearchFields;
  loading: boolean;
  errors: string;
}
