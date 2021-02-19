import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from '../config/theme';
import Hero from '../components/Hero';
import Header from '../components/Header';
import CafeList from '../views/CafeList';
import Footer from '../components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Hero />
        <CafeList />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
