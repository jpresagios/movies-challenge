import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MovieItem from '../../pages/movies/components/MovieItem';

interface Text {
  text: string;
}

jest.mock('react-text-truncate', () => function truncate({ text }: Text) {
  return <div>{text}</div>;
});

test('Movie Item renders correctly', () => {
  const tree = renderer
    .create(<MovieItem title="Movie title" url="Url movie title" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Movie Item render with the title provide as prop', () => {
  const titleMovie = 'Title movie';
  render(<MovieItem title={titleMovie} url="url movie" />);
  const movieItem = screen.getByText(titleMovie);
  expect(movieItem).toBeInTheDocument();
});
