import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from '../components/MovieList';
import { getMovies, moviesSelector } from '../../../state/slices/moviesSlice';

export default function MovieContainer() {
  const {
    movies, searchFields, sortFields, loadingMovies,
  } = useSelector(moviesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch, searchFields, sortFields]);

  return (
    <div style={{ padding: 40 }}>
      <MovieList movies={movies} loadingMovies={loadingMovies} />
    </div>
  );
}
