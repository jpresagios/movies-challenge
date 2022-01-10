import * as Yup from 'yup';

const registerUserSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .required('Email address is required')
    .email('Email address is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be 8 or more characters'),
  repeatPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf(
      [Yup.ref('password'), null],
      'Confirm password not match with password',
    ),
});

export default registerUserSchema;
