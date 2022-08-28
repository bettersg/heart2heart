import { Box, Heading, Img, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import { PrimaryColour, SecondaryColour } from '../../util/constants';

const Story: React.FC = () => (
  <Box
    px={{ base: 8, lg: 48 }}
    py={{ base: 8, lg: 24 }}
    background="yellow.50"
    alignItems="center"
    display={{ base: 'flex' }}
    justifyContent={{ base: 'space-between' }}
  >
    <Box flex={2} maxW="50%">
      <Img w={{ base: '100%' }} src="our_story.png" alt="our_story" />
    </Box>
    <Box flex={1} ml={{ base: 12 }}>
      <Heading fontSize={{ base: 16, lg: 36 }} w="full">
        <VStack>
          <Text color={PrimaryColour}>Behind the</Text>
          <Text color={SecondaryColour}>scenes</Text>
        </VStack>
      </Heading>
      <Box my={{ base: 1, lg: 8 }}>
        <Text fontSize={{ base: 12, lg: 27 }} as="b" textOverflow="ellipsis">
          Heart2Heart is managed by volunteers passionate about curating diverse
          groups of people and facilitate them through safe and brave
          conversations on difficult topics.
        </Text>
      </Box>
      <PrimaryBtn text="Learn more" hidden />
    </Box>
  </Box>
);

export default Story;
