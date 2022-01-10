import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { getMovies } from '../../state/slices/moviesSlice';
import moviesMock from '../movies/mockData';
import MovieStore from '../../state/interfaces/movie';

const initialState: MovieStore = {
  movieStore: {
    movies: moviesMock,
    sortFields: { field: 'releaseYear', order: 'desc' },
    searchFields: { year: 0, type: '' },
    loadingMovies: false,
    errors: '',
  },
};

describe('test movie slice action', () => {
  test('fetch movies', async () => {
    type DispatchExts = ThunkDispatch<any, void, AnyAction>;
    const mockStore = configureStore<MovieStore, DispatchExts>([thunk]);
    const storeMock = mockStore(initialState);

    await storeMock.dispatch(
      getMovies(),
    );
    const actions = storeMock.getActions();
    const moviesPayload = actions[1].payload;

    const firstMovie = moviesPayload[0];
    expect('title' in firstMovie).toBeTruthy();
    expect('releaseYear' in firstMovie).toBeTruthy();
  });
});
