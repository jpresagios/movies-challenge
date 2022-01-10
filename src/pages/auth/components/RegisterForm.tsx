import React from 'react';
import {
  Avatar, Box, Button, Grid, Link, TextField, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlined from '@material-ui/icons/LockOutlined';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link as LinkRDom, useNavigate } from 'react-router-dom';
import registerUserSchema from '../validations/registerValidation';
import { signUpUser } from '../../../state/slices/authSlice';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  actionsForm: {
    margin: theme.spacing(1, 0, 2),
  },
}));

export default function RegisterForm() {
  const classes = useStyles();
  const history = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: (values) => {
      dispatch(signUpUser(values, history));
    },
    validationSchema: registerUserSchema,
  });

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              variant="standard"
              required
              fullWidth
              label="Name"
              value={formik.values.name || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!(formik.touched.name && formik.errors.name)}
              helperText={
                                formik.touched.name && formik.errors.name
                                  ? formik.errors.name
                                  : ''
                            }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              required
              fullWidth
              label="Email Address"
              name="email"
              value={formik.values.email || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!(formik.touched.email && formik.errors.email)}
              helperText={
                                formik.touched.email && formik.errors.email
                                  ? formik.errors.email
                                  : ''
                            }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={formik.values.password || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!(formik.touched.password && formik.errors.password)}
              helperText={
                                formik.touched.password && formik.errors.password
                                  ? formik.errors.password
                                  : ''
                            }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              required
              fullWidth
              name="repeatPassword"
              label="Repeate Password"
              type="password"
              value={formik.values.repeatPassword || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!(formik.touched.repeatPassword && formik.errors.repeatPassword)}
              helperText={
                                formik.touched.repeatPassword && formik.errors.repeatPassword
                                  ? formik.errors.repeatPassword
                                  : ''
                            }
            />
          </Grid>
        </Grid>

        <Box mt={1}>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button type="submit" variant="outlined" color="secondary">
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link component={LinkRDom} to="/login" variant="body2">
              Use following link to Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
