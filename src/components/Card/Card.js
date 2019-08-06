import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    border: '1px solid black',
    backgroundColor: 'lightgrey',
  },
}));

export default function PaperSheet(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.question}
        </Typography>
        <Typography component="p">
          Correct Answer: {props.correctAnswer}
        </Typography>
        <Typography component="p">
          Incorrect Answer: {props.incorrectAnswer}
        </Typography>
      </Paper>
    </div>
  );
}
