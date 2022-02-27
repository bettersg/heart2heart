import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Forms/LoginForm'
import SignupForm from './components/Forms/SignupForm'
import LandingPage from './components/Main/LandingPage'
import RegisterCompletePage from './components/Main/RegisterCompletePage'

const App: React.FC = () => (
  <Routes>
    <Route path="/signup" element={<SignupForm />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/register-complete" element={<RegisterCompletePage />} />
    <Route index element={<LandingPage />} />
  </Routes>
)

export default App
