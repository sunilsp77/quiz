import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(question, value) {
  return { question, value };
}

// const rows = [
//   createData('Frozen yoghurt', 159),
//   createData('Ice cream sandwich', 237),
//   createData('Eclair', 262),
//   createData('Cupcake', 305),
//   createData('Gingerbread', 356),
// ];

export default function SimpleTable(props) {
  const classes = useStyles();

  const rows = props.quizQuestions.map(quizQuestion =>
    createData(quizQuestion.question, quizQuestion.value),
  );
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Questions</TableCell>
            <TableCell align="right">Correct/Incorrect</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.question}>
              <TableCell component="th" scope="row">
                {row.question}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
