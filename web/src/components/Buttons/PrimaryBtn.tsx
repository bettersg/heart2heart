import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';

interface IPrimaryBtn extends ButtonProps {
  text: string;
}

const PrimaryBtn: React.FC<IPrimaryBtn> = ({ text, ...props }) => (
  <Button
    flex={1}
    fontSize="sm"
    rounded="full"
    bg="yellow.400"
    color="black"
    _hover={{
      bg: 'yellow.500',
    }}
    _focus={{
      bg: 'yellow.500',
    }}
    {...props}
  >
    {text}
  </Button>
);

export default PrimaryBtn;
