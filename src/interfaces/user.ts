export default interface User {
  email: string;
  name?: string;
  password?: string;
  token?: string;
}

export interface UserResponse {
  name: string;
  token: string;
  email: string;
}
