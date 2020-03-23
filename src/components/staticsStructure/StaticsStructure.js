import 'date-fns';
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import DataController from '../controllers/dataControl.js';
import addMonths from 'date-fns/addMonths';

import getRandomData from '../../getData/index'
import LineChartModule from './charts/LineChart.js'
import PieChartModule from './charts/PieChart.js'
import RadialChart from './charts/RadialChart.js';
import Radar from './charts/Radar.js';

import useStyles from '../../useStyles.js';

import {
  ResponsiveContainer,
} from 'recharts';



export default function StaticsStructure() {
  
  const [dataSet] = useState(getRandomData(new Date(), addMonths(new Date(), 5)));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.datePicker}>
            <DataController />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ResponsiveContainer>
              <LineChartModule data={dataSet.dataForLineChart} />
            </ResponsiveContainer>  
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ResponsiveContainer>
              <PieChartModule data={dataSet.dataForPieChart} />
            </ResponsiveContainer>
          </Paper> 
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <RadialChart />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Radar />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
