export default interface User {
  email: string;
  name: string;
  [key: string]: any;
}

export interface UserResponse {
  name: string;
  email: string;
}
