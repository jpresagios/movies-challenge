import { CircularProgress, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from './MovieItem';
import Movie from '../../../interfaces/movie';
import { getMovies, moviesSelector } from '../../../state/slices/moviesSlice';
import MovieSearch from './MovieSearch';
import MovieSort from './MovieSort';

export default function MovieList() {
  const {
    movies, searchFields, sortFields, loadingMovies,
  } = useSelector(moviesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch, searchFields, sortFields]);

  return (
    <>
      {loadingMovies && (
      <Grid container justifyContent="center" alignItems="center" style={{ margin: '0 auto' }}>
        <CircularProgress size={40} />
      </Grid>
      )}

      {!loadingMovies && (
        <>
          <MovieSort />
          <MovieSearch />
          <Grid container spacing={4}>
            {movies?.map((item: Movie) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
                <MovieItem
                  title={item.title}
                  description={item.description}
                  url={item.images.posterArt.url}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
      )
    </>
  );
}
