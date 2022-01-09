import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, CircularProgress } from '@material-ui/core';
import { getMovieDetail, moviesSelector } from '../../../state/slices/moviesSlice';

export default function MovieDetail() {
  const {
    movieDetail, loadingMovies,
  } = useSelector(moviesSelector);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieDetail({ id }));
  }, [dispatch]);
  return (
    <>
      {loadingMovies && (
      <Grid container justifyContent="center" alignItems="center" style={{ margin: '0 auto' }}>
        <CircularProgress size={40} />
      </Grid>
      )}

      {!loadingMovies && (
      <Grid container>
        <Grid item md={4}>
          <img width="auto" height="60%" alt={movieDetail?.title} src={movieDetail?.images.posterArt.url} />
        </Grid>
        <Grid item md={8}>
          <h2>
            Title:
            {movieDetail?.title}
          </h2>
          <h2>
            Release Year:
            {movieDetail?.releaseYear}
          </h2>
          <h2>
            Description:
            {movieDetail?.description}
          </h2>
        </Grid>
      </Grid>
      )}
    </>
  );
}
