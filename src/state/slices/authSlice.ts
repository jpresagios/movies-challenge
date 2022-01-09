import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import fetchUser from '../../api/auth';

import AuthStore, { AuthState } from '../interfaces/auth';

const initialState: AuthState = {
  user: { email: '', name: '' },
  loadingUser: false,
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

export const authSelector = (state: { authStore: AuthStore }) => state.authStore;

export const loginUser = (data: any, history: any) => async (dispatch: any) => {
  const res = await fetchUser(data);
  dispatch(setUser(res));
  history('/');
};
