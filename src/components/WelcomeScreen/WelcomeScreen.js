import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    margin: 'auto',
    width: '60%',
    marginTop: '5%',
    border: '1px solid lightgrey',
  },
  media: {
    height: 140,
    fontSize: 20,
    textAlign: 'center',
  },
  link: {
    display: 'inline-block',
    width: 115,
    height: 25,
    backgroundColor: '#4caf50',
    textDecoration: 'none',
    padding: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    cursor: 'pointer',
  },
  linkDiv: {
    textAlign: 'center',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media}>
          <h1>Welcome to Quiz</h1>
        </CardMedia>
        <CardContent>
          <div className={classes.linkDiv}>
            <Link
              className={classes.link}
              to={{
                pathname: './start-quiz',
              }}
            >
              Start
            </Link>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
