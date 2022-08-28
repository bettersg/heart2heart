import { Box, Heading, HStack, Img, Text } from '@chakra-ui/react';
import React from 'react';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import { PrimaryColour, SecondaryColour } from '../../util/constants';

const Introduction: React.FC = () => (
  <Box
    px={{ base: 8, lg: 48 }}
    py={{ base: 4, lg: 24 }}
    background="yellow.50"
    justifyContent={{ base: 'space-between' }}
    alignItems="center"
    display={{ base: 'flex' }}
  >
    <Box mr={{ base: 4, lg: 16 }}>
      <Heading fontSize={{ base: 16, lg: 36 }}>
        <HStack>
          <Text color={PrimaryColour}>Making</Text>
          <Text color={SecondaryColour}>Connections</Text>
        </HStack>
        <Text color={PrimaryColour}>Across Boundaries</Text>
      </Heading>
      <Box my={{ base: 1, lg: 8 }}>
        <Text fontSize={{ base: 12, lg: 27 }} as="b" textOverflow="ellipsis">
          Heart2Heart is the community of choice for people who want to connect
          with someone with a different perspective
        </Text>
      </Box>
      <PrimaryBtn text="Get Started" hidden />
    </Box>
    <Box>
      <Img
        w={{ base: '100%' }}
        src="making_connections.png"
        alt="making_connections"
      />
    </Box>
  </Box>
);

export default Introduction;
