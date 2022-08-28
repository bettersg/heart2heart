import { Box, Center, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FiPlayCircle } from 'react-icons/fi';

interface IPreviewCard {
  title: string;
  duration: string;
}

const PreviewCard: React.FC<IPreviewCard> = ({
  title = 'xxx',
  duration = '60 Min',
}) => (
  <Center>
    <Box
      w={{ base: 16, lg: 'full' }}
      h={{ base: 20, lg: 'full' }}
      blockSize={{ base: 20, lg: 72 }}
      overflow={{ base: 'hidden', lg: 'auto' }}
      boxShadow="2xl"
      rounded="2xl"
      p={{ base: 1, lg: 6 }}
      bgGradient="linear-gradient(0deg, #161B1C -10.78%, rgba(22, 27, 28, 0) 100%, rgba(22, 27, 28, 0) 100%)"
    >
      <HStack spacing={{ base: 1, lg: 4 }} mt={{ base: 2, lg: 12 }}>
        <Text fontSize={{ base: 8, lg: 27 }} color="white">
          xxx . {duration}
        </Text>
        <Icon boxSize={{ base: 4, lg: 8 }} as={FiPlayCircle} />
      </HStack>
      <Box mt={{ base: 2, lg: 12 }}>
        <Text fontSize={{ base: 8, lg: 27 }} color="white">
          {title}
        </Text>
      </Box>
    </Box>
  </Center>
);

export default PreviewCard;
