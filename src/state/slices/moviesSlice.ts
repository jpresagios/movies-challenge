import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import Movie from '../../interfaces/movie';

import fetchMovies, { fetchMovieDetail } from '../../api/movies';
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
  loadingMovies: false,
  errors: '',
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loadingMovies = payload;
    },
    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setMovies: (state, { payload }: PayloadAction<Movie[]>) => {
      state.movies = payload;
    },
    setMovieDetail: (state, { payload }: PayloadAction<any>) => {
      state.movieDetail = payload;
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
      state.loadingMovies = false;
    });
    builder.addCase(getMovies.pending, (state) => {
      state.loadingMovies = true;
    });
  },
});

export default movieSlice.reducer;

export const {
  setLoading, setErrors, setMovies, setSearchFields, setSortField, setMovieDetail,
} = movieSlice.actions;

export const getMovieDetail = (data: any) => async (dispatch: any) => {
  const { id } = data;

  dispatch(setLoading(true));
  const res = await fetchMovieDetail(id);
  dispatch(setMovieDetail(res));
  dispatch(setLoading(false));
};

export const moviesSelector = (state: { movieStore: MovieState }) => state.movieStore;
