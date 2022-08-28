import {
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import PrimaryBtn from './Buttons/PrimaryBtn';

const Header: React.FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Flex
      px={{ base: 8, lg: 48 }}
      py={{ base: 4, lg: 8 }}
      width="full"
      bg="yellow.50"
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Flex alignItems="center">
        <Center>
          <Image
            w={{ base: 16, lg: 'full' }}
            h="full"
            objectFit="cover"
            src="logo.png"
          />
        </Center>
        <Heading
          color="black"
          ml={{ base: 4 }}
          fontSize={{ base: 'xs', lg: '3xl' }}
        >
          Heart 2 Heart
        </Heading>
      </Flex>
      <Flex alignItems="center">
        <HStack spacing={{ base: 0, lg: 8 }}>
          {isMobile ? null : (
            <Button
              fontSize={{ base: 'xs', lg: '2xl' }}
              bg="none"
              _hover={{ bg: 'none' }}
            >
              About
            </Button>
          )}
          {isMobile ? null : (
            <Button
              fontSize={{ base: 'xs', lg: '2xl' }}
              bg="none"
              _hover={{ bg: 'none' }}
            >
              Find a session
            </Button>
          )}
          <Button
            fontSize={{ base: 'xs', lg: '2xl' }}
            bg="none"
            _hover={{ bg: 'none' }}
            hidden
          >
            Login
          </Button>
          <PrimaryBtn fontSize={{ base: 'xs', lg: '2xl' }} text="Sign Up" />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
