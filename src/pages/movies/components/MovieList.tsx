import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import MovieItem from './MovieItem';
import Movie from '../../../interfaces/movie';
import MovieSearch from './MovieSearch';
import MovieSort from './MovieSort';

interface MovieListProps {
  loadingMovies: boolean;
  movies: Movie[];
}
export default function MovieList({ loadingMovies, movies }: MovieListProps) {
  return (
    <>
      {loadingMovies && (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ margin: '0 auto' }}
        >
          <CircularProgress size={40} />
        </Grid>
      )}

      {!loadingMovies && (
        <>
          <MovieSort />
          <MovieSearch />
          <Grid container spacing={4}>
            {movies?.map((item: Movie) => (
              <Grid item xs={12} sm={12} md={6} lg={3} key={item._id}>

                <MovieItem
                  title={item.title}
                  url={item.images.posterArt.url}
                />

              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
