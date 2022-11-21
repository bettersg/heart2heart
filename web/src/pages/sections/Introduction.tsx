import { Box, Grid, GridItem, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import { useGlobalStore } from '../../stores';
import { PrimaryColour, SecondaryColour } from '../../util/constants';

const Introduction: React.FC = () => {
  const [setOpen] = useGlobalStore((state) => [state.setSignupModalOpen]);

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={16} alignItems="center">
      <GridItem>
        <>
          <Heading fontSize={{ base: 12, lg: 36 }}>
            <Grid templateColumns="repeat(1fr)" gap={0}>
              <GridItem>
                <Text color={SecondaryColour}>Forging Connections,</Text>
              </GridItem>
              <GridItem>
                <Text color={PrimaryColour}>bridging conversations</Text>
              </GridItem>
            </Grid>
          </Heading>
          <Box my={{ base: 2, lg: 4 }}>
            <Text
              fontSize={{ base: 8, lg: 16 }}
              noOfLines={5}
              as="b"
              textOverflow="ellipsis"
            >
              Heart2Heart is a community-based platform that seeks to connect
              like-minded individuals algorithmically through self-facilitated
              video discussions, designed to encourage different perspectives
              and more meaningful conversations
            </Text>
          </Box>
          <Box my={{ base: 2, lg: 4 }}>
            <PrimaryBtn onClick={setOpen} text="Sign Up" />
          </Box>
        </>
      </GridItem>
      <GridItem>
        <Img src="/images/making_connections.png" alt="making_connections" />
      </GridItem>
    </Grid>
  );
};

export default Introduction;
