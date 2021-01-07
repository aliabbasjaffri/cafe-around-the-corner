import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from '../config/theme';
import CafeCard from '../components/cafe';

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

const arraylist = [data];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Grid
            container
            xs={12}
            sm={6}
            direction="column"
            justify="space-between"
            alignItems="stretch"
          >
            <Grid item xs={12}>
              {arraylist.map((_data: any) => {
                return (
                  <CafeCard
                    key={_data.name}
                    initial={_data.initial}
                    distance={_data.distance}
                    image={_data.image}
                    name={_data.name}
                    open={_data.open}
                    shortDescription={_data.shortDescription}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
