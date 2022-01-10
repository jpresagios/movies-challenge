export default interface User {
  email: string;
  name: string;
  password?: string;
}

export interface UserResponse {
  name: string;
  email: string;
}
