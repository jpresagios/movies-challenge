import React from 'react';
import Container from '@material-ui/core/Container';
import RegisterForm from '../components/RegisterForm';

export default function RegisterContainer() {
  return (
    <Container maxWidth="xs">
      <RegisterForm />
    </Container>
  );
}
