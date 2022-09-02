import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  ModalProps,
} from '@chakra-ui/react';
import React from 'react';

const SignUpModal: React.FC<Omit<ModalProps, 'children'>> = ({
  isOpen,
  onClose,
  ...props
}) => (
  <Modal isOpen={isOpen} onClose={onClose} {...props}>
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
);

export default SignUpModal;
