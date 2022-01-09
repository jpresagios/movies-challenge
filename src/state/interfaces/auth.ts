import User from '../../interfaces/user';

export interface AuthState {
  user: User;
  loadingUser: boolean;
}

export default interface AuthStore {
  authStore: AuthState;
}
