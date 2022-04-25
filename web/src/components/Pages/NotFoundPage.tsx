import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="px-40 py-20 bg-white rounded-md shadow-xl">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-blue-600 text-9xl">404</h1>

        <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
          <span className="text-red-500">Oops!</span> Page not found
        </h6>

        <p className="mb-8 text-center text-gray-500 md:text-lg">
          The page you’re looking for doesn’t exist.
        </p>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
