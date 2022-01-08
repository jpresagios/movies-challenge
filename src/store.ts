import { configureStore } from '@reduxjs/toolkit';
import moviesSliceReducer from './slices/moviesSlice';

const store = configureStore({
  reducer: {
    movieStore: moviesSliceReducer,
  },
});

export default store;
