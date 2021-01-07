import React, { Component } from 'react';
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

type CafeProps = {
  initial: string;
  distance: string;
  image: string;
  name: string;
  open: boolean;
  shortDescription: string;
};

type CafeState = {};

export default class CafeCard extends Component<CafeProps, CafeState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    return (
      <Card style={{ maxWidth: 640 }}>
        <CardHeader
          avatar={
            <Avatar aria-label="cafe" style={{ backgroundColor: red[500] }}>
              {this.props.initial}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.name}
          subheader={this.props.distance}
        />
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image={this.props.image}
          title={this.props.name}
        />
        <CardContent>
          <Typography
            noWrap
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {this.props.shortDescription}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
