import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { SecondaryColour } from '../util/constants';

const Footer: React.FC = () => (
  <Box
    bg={SecondaryColour}
    py={{ base: 8, lg: 8 }}
    px={{ base: 8, lg: 48 }}
    bottom={0}
    position="absolute"
    w="full"
  >
    <HStack spacing={16}>
      <Text fontSize={{ base: 'xs', lg: 'lg' }}>
        © Heart2Heart. All rights reserved
      </Text>
      <Text fontSize={{ base: 'xs', lg: 'lg' }}>Follow Us</Text>
    </HStack>
  </Box>
);

export default Footer;
