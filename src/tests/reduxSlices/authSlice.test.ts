import '@testing-library/jest-dom';
import thunk, { ThunkDispatch } from 'redux-thunk';
import Swal from 'sweetalert2';
import { AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from '../../api/axiosClient';
import { loginUser } from '../../state/slices/authSlice';
import AuthStore from '../../state/interfaces/auth';

import store from '../../store';

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

let mock: MockAdapter;

beforeAll(() => {
  mock = new MockAdapter(axios);
});

afterEach(() => {
  mock.reset();
});

describe('Test auth slice', () => {
  test('Should initially initialState to default empty object', () => {
    const state = store.getState().authStore;
    expect(state.user.email).toEqual('');
    expect(state.user.name).toEqual('');
  });

  // test('should auth user', async () => {
  //   mock.onPost('https://sideproject-movies-api.herokuapp.com/login').reply(200, { name: 'pepin', email: 'cas' });

  //   const initialState: AuthStore = {
  //     authStore: {
  //       user: { name: '', email: '' },
  //       loadingUser: false,
  //     },
  //   };
  //   type DispatchExts = ThunkDispatch<any, void, AnyAction>;
  //   const mockStore = configureStore<AuthStore, DispatchExts>([thunk]);
  //   const storeMock = mockStore(initialState);
  //   await storeMock.dispatch(loginUser({ email: 'tedddst@test.com', password: 'test' }, null));

  //   expect(Swal.fire).toHaveBeenCalledWith(
  //     'Info',
  //     'Check user credentials',
  //     'error',
  //   );

  //   // const state = storeMock.getState().authStore;
  //   // expect(state.user.name).toEqual('test');
  //   // expect(state.user.email).toEqual('test@test.com');
  // });

  test('invalid user fire modal info to the user', async () => {
    const initialState: AuthStore = {
      authStore: {
        user: { name: '', email: '' },
      },
    };
    type DispatchExts = ThunkDispatch<any, void, AnyAction>;
    const mockStore = configureStore<AuthStore, DispatchExts>([thunk]);
    const storeMock = mockStore(initialState);
    await storeMock.dispatch(loginUser({ email: 'tedddst@test.com', password: 'test' }, null));

    expect(Swal.fire).toHaveBeenCalledWith(
      'Info',
      'Check user credentials',
      'error',
    );
  });
});
