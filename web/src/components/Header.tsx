import {
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { PrimaryColour } from '../util/constants';
import PrimaryBtn from './Buttons/PrimaryBtn';

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <PrimaryBtn
            onClick={onOpen}
            fontSize={{ base: 8, lg: 16 }}
            text="Sign Up"
          />
        </Center>
      </Flex>
      <Modal isCentered size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Flex>
            <Image w="200px" src="/images/signup_modal_side.png" />
            <Container>
              <ModalHeader>H2H offers a chance for you to be you!</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text align="center" fontWeight="bold" mb="1rem">
                  Register for our Beta Version Now!
                </Text>
                <Center>
                  <Link
                    href="https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_251CKKSQxbDJEQm"
                    isExternal
                  >
                    <PrimaryBtn text="Fill up the form here!" />
                  </Link>
                </Center>
              </ModalBody>
            </Container>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;
