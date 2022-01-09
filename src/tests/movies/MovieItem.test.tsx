import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieItem from '../../pages/movies/components/MovieItem';

test('Movie Item render with the title provide as prop', () => {
  const titleMovie = 'Title movie';
  render(<MovieItem title={titleMovie} description="Description movie" url="url movie" />);
  const movieItem = screen.getByText(titleMovie);
  expect(movieItem).toBeInTheDocument();
});

test('Movie Item render with the description provide as prop', () => {
  const descriptionMovie = 'Description movie';
  render(<MovieItem title="Title movie" description={descriptionMovie} url="url movie" />);
  const movieItem = screen.getByText(descriptionMovie);
  expect(movieItem).toBeInTheDocument();
});
