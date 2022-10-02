import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import Introduction from './sections/Introduction';
import Story from './sections/Story';
import Topics from './sections/Topics';

const LandingPage: React.FC = () => (
  <Grid templateColumns="repeat(1fr, 3)" gap={{ base: 24, lg: 16 }} py={24}>
    <GridItem>
      <Introduction />
    </GridItem>
    <GridItem>
      <Topics />
    </GridItem>
    <GridItem>
      <Story />
    </GridItem>
  </Grid>
);

export default LandingPage;
