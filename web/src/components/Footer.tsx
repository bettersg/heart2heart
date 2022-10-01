import { Center, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { SecondaryColour } from '../util/constants';

const Footer: React.FC = () => (
  <Flex bg={SecondaryColour} height="full">
    <Center pl={{ base: 8, lg: 48 }}>
      <Text fontSize={{ base: 8, lg: 16 }}>
        © Heart2Heart. All rights reserved
      </Text>
    </Center>
    <Spacer />
    <Center pr={{ base: 8, lg: 48 }}>
      <Text fontSize={{ base: 8, lg: 16 }}>Follow Us</Text>
    </Center>
  </Flex>
);

export default Footer;
