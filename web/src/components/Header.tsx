import { Center, Flex, Heading, HStack, Image, Spacer } from '@chakra-ui/react';
import React from 'react';
import { useGlobalStore } from '../stores';
import { PrimaryColour } from '../util/constants';
import PrimaryBtn from './Buttons/PrimaryBtn';

const Header: React.FC = () => {
  const [setOpen] = useGlobalStore((state) => [state.setSignupModalOpen]);

  return (
    <>
      <Flex height="full">
        <Center>
          <HStack>
            <Image
              height={{ base: '50px', lg: 'auto' }}
              src="/images/logo.png"
            />
            <Heading color={PrimaryColour} fontSize={{ base: 16, lg: 32 }}>
              Heart 2 Heart
            </Heading>
          </HStack>
        </Center>
        <Spacer />
        <Center>
          <PrimaryBtn onClick={setOpen} text="Sign Up" />
        </Center>
      </Flex>
    </>
  );
};

export default Header;
