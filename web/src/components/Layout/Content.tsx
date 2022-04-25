import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';

const Content: React.FC = () => (
  <div className="flex flex-col h-screen">
    <NavBar />
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <Outlet />
      </div>
    </div>
    <Footer />
  </div>
);

export default Content;
