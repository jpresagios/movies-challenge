import {
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useFormik } from 'formik';
import React from 'react';
import { Link as LinkRDom, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../state/slices/authSlice';

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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const history = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(loginUser(values, history));
    },
  });

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Log in
      </Typography>
      <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
        <Grid container spacing={2}>
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
        </Grid>

        <Box mt={1}>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button type="submit" variant="outlined" color="secondary">
                Log in
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link component={LinkRDom} to="/signUp" variant="body2">
              Use following link to Sign Up
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
