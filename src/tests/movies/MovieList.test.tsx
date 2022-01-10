import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import moviesMock from './mockData';
import App from '../../App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
interface Text {
  text: string;
}

jest.mock('react-text-truncate', () => function truncate({ text }: Text) {
  return <div>{text}</div>;
});

// mock jwt-decode to authenticate the user
jest.mock('jwt-decode', () => () => ({ exp: 111111111111111 }));

test('Movie List render all the movies', () => {
  const initState = {
    authStore: {
      user: { name: '' },
    },
    movieStore: {
      movies: moviesMock,
      sortFields: { field: 'releaseYear', order: 'desc' },
      searchFields: { year: 0, type: '' },
      loadingMovies: false,
      errors: '',
    },
  };

  const store = mockStore(initState);

  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  for (let i = 0; i < moviesMock.length; i += 1) {
    expect(wrapper.text().includes(moviesMock[i].title)).toBe(true);
  }
});
