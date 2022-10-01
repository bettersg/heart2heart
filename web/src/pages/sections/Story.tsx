import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Img,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { PrimaryColour, SecondaryColour } from '../../util/constants';

const Story: React.FC = () => (
  <Grid templateColumns="repeat(2, 1fr)" gap={16} alignItems="center">
    <GridItem>
      <Img src="/images/our_story.png" alt="our_story" />
    </GridItem>
    <GridItem>
      <>
        <Heading fontSize={{ base: 12, lg: 36 }}>
          <HStack>
            <Text color={PrimaryColour}>Behind the</Text>
            <Text color={SecondaryColour}>Scenes</Text>
          </HStack>
        </Heading>
        <Box my={{ base: 2, lg: 4 }}>
          <Text
            fontSize={{ base: 8, lg: 16 }}
            noOfLines={5}
            as="b"
            textOverflow="ellipsis"
          >
            Heart2Heart is a project built by a group of passionate volunteers
            who hopes to create a more inclusive, empathetic and understanding
            society through sincere and candid conversations
          </Text>
        </Box>
      </>
    </GridItem>
  </Grid>
);

export default Story;
