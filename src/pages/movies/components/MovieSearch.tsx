import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import React from 'react';

import DateFnsUtils from '@date-io/date-fns';

import {
  Grid,
  FormControl,
  TextField,
  MenuItem,
  Modal,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { moviesSelector, setSearchFields } from '../../../slices/moviesSlice';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    marginTop: '-200px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '400px',
  },
  iconSort: {
    fontSize: '35px',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 50,
    width: 2,
  },
}));

interface MovieSearchProps {
  openModal: boolean;
  handleClose: () => void;
}

export default function MovieSearch({ openModal, handleClose }: MovieSearchProps) {
  const classes = useStyles();
  const { searchFields } = useSelector(moviesSelector);
  const dispatch = useDispatch();

  const onRequestTypeChange = (e: any) => {
    const { value } = e.target;
    dispatch(setSearchFields({ name: 'type', value }));
  };

  const onRequestYearChange = (e: any) => {
    dispatch(setSearchFields({ name: 'year', value: e.getFullYear() }));
  };

  return (
    <Modal
      open={openModal}
      className={classes.modal}
      onClose={handleClose}
    >
      <div className={classes.paper}>
        <h2>Search movies</h2>
        <form noValidate autoComplete="off">
          <Grid
            container
            item
            spacing={3}
            direction="column"
            justifyContent="center"
          >
            <Grid item>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  select
                  label="Select category"
                  variant="outlined"
                  fullWidth
                  value={searchFields.type}
                  onChange={onRequestTypeChange}
                  name="type"
                >
                  <MenuItem value="series">Serie</MenuItem>
                  <MenuItem value="movie">Movie</MenuItem>
                </TextField>
              </FormControl>

            </Grid>

            <Grid item>
              <FormControl variant="outlined" fullWidth>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="yyyy"
                    margin="normal"
                    value={searchFields.year ? new Date(searchFields.year, 0) : null}
                    maxDate={new Date()}
                    onChange={onRequestYearChange}
                    name="year"
                    views={['year']}
                  />
                </MuiPickersUtilsProvider>

              </FormControl>
            </Grid>
          </Grid>
        </form>
      </div>
    </Modal>
  );
}
