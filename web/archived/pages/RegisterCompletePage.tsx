import React from 'react';

const RegisterCompletePage: React.FC = () => (
  <div className="relative z-10 flex-auto flex items-center justify-center text-center h-screen py-16 px-4 sm:px-6 lg:px-8 bg-yellow-100">
    <div>
      <img className="mx-auto py-4" alt="heart2heart" src="/heart2heart.png" />
      <h1 className="text-3x1 sm:text-4.5xl text-black font-extrabold mb-4">
        Thank you for registering interest!
      </h1>
      <p className="mb-8 max-w-lg mx-auto text-black">
        We will contact you soon. Please look out for our email so we can keep
        you up to date. Click{' '}
        <a className="border-b" href="/">
          here
        </a>{' '}
        to go back.
      </p>
    </div>
  </div>
);

export default RegisterCompletePage;
