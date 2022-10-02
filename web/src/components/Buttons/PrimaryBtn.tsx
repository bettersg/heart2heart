import { Button, ButtonProps, Text } from '@chakra-ui/react';
import React from 'react';

interface IPrimaryBtn extends ButtonProps {
  text: string;
}

const PrimaryBtn: React.FC<IPrimaryBtn> = ({ text, ...props }) => (
  <Button
    size={{ base: 'xs', lg: 'lg' }}
    rounded="2xl"
    bg="yellow.400"
    _hover={{
      bg: 'yellow.500',
    }}
    _focus={{
      bg: 'yellow.500',
    }}
    {...props}
  >
    <Text fontSize={{ base: '8px', lg: '16px' }}>{text}</Text>
  </Button>
);

export default PrimaryBtn;
