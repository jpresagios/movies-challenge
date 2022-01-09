import React from 'react';
import Container from '@material-ui/core/Container';
import LoginForm from '../components/LoginForm';

export default function LoginContainer() {
  return (
    <Container maxWidth="xs">
      <LoginForm />
    </Container>
  );
}
