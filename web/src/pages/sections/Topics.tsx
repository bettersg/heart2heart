import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import PreviewCard from '../../components/Cards/PreviewCard';
import { PrimaryColour, SecondaryColour } from '../../util/constants';

const Topics: React.FC = () => (
  <Box
    px={{ base: 8, lg: 48 }}
    background="yellow.50"
    alignItems="center"
    display={{ base: 'flex' }}
    justifyContent={{ base: 'space-between' }}
  >
    <Box maxW="50%">
      <Grid templateColumns="repeat(3, 2fr)" gap={{ base: 1, lg: 6 }} flex={2}>
        <GridItem>
          <PreviewCard title="Racism" duration="120 Min" />
        </GridItem>
        <GridItem>
          <PreviewCard title="Gender Inequality" duration="90 Min" />
        </GridItem>
        <GridItem>
          <PreviewCard title="Sustainability" duration="60 Min" />
        </GridItem>
        <GridItem>
          <PreviewCard title="Mental Wellness" duration="30 Min" />
        </GridItem>
        <GridItem>
          <PreviewCard title="LGBTQ+" duration="45 Min" />
        </GridItem>
        <GridItem>
          <PreviewCard title="Climate Change" duration="60 Min" />
        </GridItem>
      </Grid>
    </Box>
    <Box flex={1} ml={{ base: 12 }}>
      <Heading fontSize={{ base: 16, lg: 36 }} w="full" textAlign="center">
        <Text color={PrimaryColour}>Find a variety of</Text>
        <Text color={SecondaryColour}>topics</Text>
        <Text color={PrimaryColour}>you are passionate about</Text>
      </Heading>
      <Box my={{ base: 1, lg: 8 }}>
        <Text fontSize={{ base: 12, lg: 27 }} as="b" textOverflow="ellipsis">
          xxx
        </Text>
      </Box>
      <PrimaryBtn text="See more" hidden />
    </Box>
  </Box>
);

export default Topics;
