import React from 'react';
import Introduction from './sections/Introduction';
import Story from './sections/Story';
import Topics from './sections/Topics';

const LandingPage: React.FC = () => (
  <>
    <Introduction />
    <Topics />
    <Story />
  </>
);

export default LandingPage;
