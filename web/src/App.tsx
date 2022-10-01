import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';

const App: React.FC = () => (
  <Box background="yellow.50">
    <Grid gridTemplateRows={{ base: '75px 1fr 75px', lg: '100px 1fr 100px' }}>
      <GridItem px={{ base: 8, lg: 48 }}>
        <Header />
      </GridItem>
      <GridItem px={{ base: 8, lg: 48 }}>
        <Routes>
          <Route path="*" element={<LandingPage />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  </Box>
);

export default App;
