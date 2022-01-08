import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from './MovieItem';
import Movie from '../../../interfaces/movie';
import { getMovies, moviesSelector } from '../../../slices/moviesSlice';
import MovieSearch from './MovieSearch';

export default function MovieList() {
  const { movies } = useSelector(moviesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <MovieSearch />
      <Grid container spacing={4}>
        {movies?.map((item: Movie) => (
          <Grid item xs={12} sm={6} md={3} key={item._id}>
            <MovieItem
              title={item.title}
              description={item.description}
              url={item.images.posterArt.url}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
