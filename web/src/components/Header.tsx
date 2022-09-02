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
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight="bold" mb="1rem">
                  This is the modal text
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Click here to register your interest
                </Button>
                <Button variant="ghost">Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
