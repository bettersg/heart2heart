import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/Forms/LoginForm';
import SignupForm from './components/Forms/SignupForm';
import Content from './components/Layout/Content';
import LandingPage from './components/Pages/LandingPage';
import NotFoundPage from './components/Pages/NotFoundPage';
import RegisterCompletePage from './components/Pages/RegisterCompletePage';
import SessionDetailsPage from './components/Pages/SessionDetailsPage';
import SessionsPage from './components/Pages/SessionsPage';

const App: React.FC = () => (
  <>
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register-complete" element={<RegisterCompletePage />} />
      <Route path="/" element={<Content />}>
        <Route path="/sessions">
          <Route index element={<SessionsPage />} />
          <Route path=":id" element={<SessionDetailsPage />} />
        </Route>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  </>
);

export default App;
