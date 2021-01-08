import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from '../config/theme';
import CafeCard, { ICafeCard } from '../components/cafe';

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

const arraylist = [data, data, data, data];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Grid container spacing={3}>
            {arraylist.map((_data: ICafeCard) => (
              <Grid item xs={6} sm={6} key={_data.name}>
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
      </Router>
    </ThemeProvider>
  );
}

export default App;
