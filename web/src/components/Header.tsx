import {
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  useDisclosure,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import PrimaryBtn from './Buttons/PrimaryBtn';

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <PrimaryBtn
            onClick={onOpen}
            fontSize={{ base: 'xs', lg: '2xl' }}
            text="Sign Up"
          />
          <Modal isCentered size="3xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <Flex>
                <Image w="200px" src="signup_modal_side.png" />
                <Container>
                  <ModalHeader>
                    H2H offers a chance for you to be you!
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text align="center" fontWeight="bold" mb="1rem">
                      Register for our Beta Version Now!
                    </Text>
                    <Center>
                      <Button colorScheme="blue" mr={3}>
                        Fill up the form here!
                      </Button>
                    </Center>
                  </ModalBody>
                  <ModalFooter>
                    {/* <Button onClick={onClose}>Cancel</Button> */}
                  </ModalFooter>
                </Container>
              </Flex>
            </ModalContent>
          </Modal>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
