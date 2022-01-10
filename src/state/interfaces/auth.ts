import User from '../../interfaces/user';

export interface AuthState {
  user: User;
}

export default interface AuthStore {
  authStore: AuthState;
}
