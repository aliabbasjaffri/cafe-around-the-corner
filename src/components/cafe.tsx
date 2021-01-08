import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    base: {
      maxWidth: 480
    },
    media: {
      height: 0,
      paddingTop: '56.25%'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);

export interface ICafeCard {
  initial: string;
  distance: string;
  image: string;
  name: string;
  open: boolean;
  shortDescription: string;
}

export default function CafeCard(props: ICafeCard) {
  const style = useStyles();

  const [data, setData] = useState<ICafeCard>(props);

  useEffect(() => {
    setData(props);
  });

  return (
    <Card className={style.base}>
      <CardHeader
        avatar={
          <Avatar aria-label="cafe" className={style.avatar}>
            {data.initial}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.name}
        subheader={data.distance}
      />
      <CardMedia className={style.media} image={data.image} title={data.name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.shortDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}
