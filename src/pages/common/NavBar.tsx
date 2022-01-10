import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSelector } from '../../state/slices/authSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const {
    user,
  } = useSelector(authSelector);

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ color: 'white' }}>
                Home
              </Link>
            </Typography>
            <Typography variant="h6">
              Welcome
              {' '}
              {user.name}
            </Typography>
            <IconButton
              arial-label="exit-button"
              color="inherit"
            >
              <ExitToAppIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
