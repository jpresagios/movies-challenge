import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import Movie from '../../interfaces/movie';

import fetchMovies from '../../api/movies';
import MovieStore, { MovieState } from '../interfaces/movie';

export const getMovies = createAsyncThunk<Movie[]>(
  'fetch/movies',
  async (_, thunkAPI) => {
    const state: MovieStore = <MovieStore>thunkAPI.getState();
    const { movieStore: { searchFields, sortFields } } = state;

    const res = await fetchMovies(searchFields, sortFields);
    return res;
  },
);

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
    setSortField: (state, { payload }: PayloadAction<any>) => {
      const { field, order } = payload;
      state.sortFields.field = field;
      state.sortFields.order = order;
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
  setLoading, setErrors, setMovies, setSearchFields, setSortField,
} = movieSlice.actions;

export const moviesSelector = (state: { movieStore: MovieState }) => state.movieStore;