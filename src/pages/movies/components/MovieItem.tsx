import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import TextTruncate from 'react-text-truncate';
import MovieProps from '../interfaces/MovieProps';

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: '60.25%', // 16:9
  },
}));

export default function MovieItem({ title, description, url }: MovieProps) {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title={(
        <TextTruncate
          line={1}
          text={title}
        />
)}
      />
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
