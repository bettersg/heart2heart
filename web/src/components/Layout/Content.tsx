import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import SideNav from './SideNav';

const Content: React.FC = () => (
  <>
    <div className="flex">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <SideNav />
      </div>
      <div className="bg-yellow-100 w-full min-h-screen">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <Outlet />
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Content;
