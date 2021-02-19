import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles
  // styled
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import { Button, CardActions } from '@material-ui/core';

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

export const CafeCard = ({
  initial,
  distance,
  image,
  name,
  open,
  shortDescription
}: ICafeCard) => {
  const style = useStyles();
  return (
    <Card className={style.base}>
      <CardHeader
        avatar={
          <Avatar aria-label="cafe" className={style.avatar}>
            {initial}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={distance}
      />
      <CardMedia className={style.media} image={image} title={name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {shortDescription} {open}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default CafeCard;
