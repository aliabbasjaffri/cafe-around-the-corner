import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import CafeCard from '../components/CafeCard';

const data = {
  initial: 'C',
  distance: '1.3Km',
  image:
    'https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG',
  name: 'New Cafe',
  open: true,
  shortDescription:
    "Really nice cafe around the corner. We're glad to serve you day and night with our utmost hospitality. Please come again soon!"
};

const arraylist = [data, data, data, data, data, data, data, data, data];

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export const CafeList = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {arraylist.map((_data) => (
          <Grid item xs={12} sm={6} md={4}>
            <CafeCard
              key={_data.name}
              initial={_data.initial}
              distance={_data.distance}
              image={_data.image}
              name={_data.name}
              open={_data.open}
              shortDescription={_data.shortDescription}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CafeList;
