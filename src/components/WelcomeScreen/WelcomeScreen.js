import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    fontSize: 30,
    textAlign: 'center',
    textDecoration: 'none',
    border: '1px solid red',
    backgroundColor: 'grey',
    width: 'auto',
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
          <div className={classes.link}>
            <Link
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
