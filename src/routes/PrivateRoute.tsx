import React from 'react';
import { Navigate } from 'react-router-dom';
import jwt_decode, { JwtPayload } from 'jwt-decode';

interface AuthProps {
  children: any;
}

const checkTokenExpiration = (): boolean => {
  const token: string = localStorage.getItem('token') as string;
  const decoded = jwt_decode<JwtPayload>(token);
  const timeNow = Date.now() / 1000;
  const exp: number = decoded.exp as number;
  if (exp < timeNow) {
    return false;
  }

  return true;
};

export default function PrivateRoute({ children }: AuthProps) {
  const tokenIsValid = checkTokenExpiration();

  return (tokenIsValid ? children : <Navigate to="/login" />);
}
