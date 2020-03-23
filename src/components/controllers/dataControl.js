import React, { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns';
import addMonths from 'date-fns/addMonths';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

import useStyles from '../../useStyles.js';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';



export default function DataController() {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(addMonths(startDate, 5)));
  const [interval, setInterval] = React.useState('');

  const setDate = (date, isEnd) => {
    if (isEnd) {
      setEndDate(date)
    } else {
      setStartDate(date);
    }
  }

  const handleIntervalChange = event => {
    setInterval(event.target.value);
  };

  const classes = useStyles();
  return (
    <Grid container justify="space-around">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="start-date"
          label="Start Date"
          format="dd/MM/yyyy"
          value={startDate}
          onChange={(date) => setDate(date)}
          KeyboardButtonProps={{
            'aria-label': 'change start',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="end-date"
          label="End Date"
          format="dd/MM/yyyy"
          value={endDate}
          minDate={startDate}
          onChange={(date) => setEndDate(date, true)}
          KeyboardButtonProps={{
            'aria-label': 'change end',
          }}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="refresh-interval">(Min)</InputLabel>
          <Select
            labelId="interval-label"
            id="interval-refresh"
            value={interval}
            onChange={handleIntervalChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
          <FormHelperText>Refresh Interval</FormHelperText>
        </FormControl>
      </MuiPickersUtilsProvider>
    </Grid>
  )
}