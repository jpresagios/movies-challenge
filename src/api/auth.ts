import User, { UserResponse } from '../interfaces/user';
import axios from './axiosClient';

const fetchUser = async (
  userData: User,
): Promise<UserResponse> => {
  const { data } = await axios.post('/login', userData);

  const result: UserResponse = {
    token: data.accessToken,
    email: data.user.email,
    name: data.user.name,
  };
  return result;
};

export default fetchUser;
