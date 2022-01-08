import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import Movie from '../interfaces/movie';

import fetchMovies from '../api/movies';

// The AppThunk type will help us in writing type definitions for thunk actions
export type AppThunk = ThunkAction<void, MovieState, unknown, Action<string>>;

export interface MovieState {
  movies: Movie[];
  sortFields: any;
  searchFields: any;
  loading: boolean;
  errors: string;
}

const initialState: MovieState = {
  movies: [],
  sortFields: { field: 'releaseYear', order: 'desc' },
  searchFields: { year: 0, type: '' },
  loading: false,
  errors: '',
};

const photoSlice = createSlice({
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
});

export const {
  setLoading, setErrors, setMovies, setSearchFields,
} = photoSlice.actions;

export default photoSlice.reducer;

export const moviesSelector = (state: { movieStore: MovieState }) => state.movieStore;

export const getMovies = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await fetchMovies();

    dispatch(setLoading(false));
    dispatch(setMovies(res));
  } catch (e) {
    dispatch(setLoading(false));
  }
};
