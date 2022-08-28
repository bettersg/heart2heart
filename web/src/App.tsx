import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';

const App: React.FC = () => (
  <>
    <Header />
    <Routes>
      <Route path="*" element={<LandingPage />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
    <Box pb={16} w="full">
      <Footer />
    </Box>
  </>
);

export default App;
