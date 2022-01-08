import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import MovieProps from '../interfaces/MovieProps';

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: '60.25%', // 16:9
  },
}));

function MovieItem({ title, description, url }: MovieProps) {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title={title} titleTypographyProps={{ variant: 'h6' }} />
      <CardMedia
        className={classes.media}
        image={url}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieItem;
