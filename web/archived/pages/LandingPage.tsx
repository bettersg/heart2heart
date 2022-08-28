import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <p className="uppercase tracking-loose w-full">
          Be part of Heart2Heart!
        </p>
        <h1 className="my-4 text-5xl font-bold leading-tight">
          Digital Faciliation Platform for Building Community
        </h1>
        <p className="leading-normal text-2xl mb-8">
          To curate diverse groups of people and faciliate them through safe and
          brave conversations on difficult topics
        </p>
        <button
          type="button"
          className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          onClick={() => navigate('/signup')}
        >
          Subscribe
        </button>
      </div>
      <div className="w-full md:w-3/5 py-6 text-center">
        <img alt="hero" className="w-full md:w-4/5 z-50" src="hero.png" />
      </div>
    </>
  );
};

export default LandingPage;
