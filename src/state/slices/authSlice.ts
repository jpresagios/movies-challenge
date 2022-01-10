import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import fetchUser, { registerUser } from '../../api/auth';

import { AuthState } from '../interfaces/auth';

const initialState: AuthState = {
  user: { email: '', name: '' },
};

const authlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<any>) => {
      state.user = payload;
    },
  },
});

export default authlice.reducer;

export const {
  setUser,
} = authlice.actions;

export const loginUser = (data: any, history: any) => async (dispatch: any) => {
  try {
    const res = await fetchUser(data);
    dispatch(setUser(res));

    if (history) history('/');
  } catch (error) {
    Swal.fire('Info', 'Check user credentials', 'error');
  }
};

export const signUpUser = (data: any, history: any) => async (dispatch: any) => {
  const res = await registerUser(data);
  dispatch(setUser(res));
  history('/login');
};

export const authSelector = (state: { authStore: AuthState }) => state.authStore;
