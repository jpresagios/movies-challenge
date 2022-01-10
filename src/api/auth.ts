import User, { UserResponse } from '../interfaces/user';
import axios from './axiosClient';

const fetchUser = async (
  userData: User,
): Promise<UserResponse> => {
  const { data } = await axios.post('/login', userData);

  const result: UserResponse = {
    email: data.user.email,
    name: data.user.name,
  };

  localStorage.setItem('token', data.accessToken);

  return result;
};

export const registerUser = async (
  userData: User,
): Promise<UserResponse> => {
  const { data } = await axios.post('/signup', userData);

  const result: UserResponse = {
    email: data.user.email,
    name: data.user.name,
  };
  return result;
};

export default fetchUser;
