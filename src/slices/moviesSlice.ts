import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import Movie from '../interfaces/movie';

import fetchMovies from '../api/movies';
import SearchFields from '../interfaces/searchFields';

export const getMovies = createAsyncThunk<Movie[]>(
  'fetch/movies',
  async () => {
    const res = await fetchMovies();
    return res;
  },
);

export interface MovieState {
  movies: Movie[];
  sortFields: any;
  searchFields: SearchFields;
  loading: boolean;
  errors: string;
}

const initialState: MovieState = {
  movies: [],
  sortFields: { field: 'releaseYear', order: 'desc' },
  searchFields: { year: 2015, type: '' },
  loading: false,
  errors: '',
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setMovies: (state, { payload }: PayloadAction<Movie[]>) => {
      state.movies = payload;
    },
    setSearchFields: (state, { payload }: PayloadAction<any>) => {
      const { name, value } = payload;
      state.searchFields[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default movieSlice.reducer;

export const {
  setLoading, setErrors, setMovies, setSearchFields,
} = movieSlice.actions;

export const moviesSelector = (state: { movieStore: MovieState }) => state.movieStore;
