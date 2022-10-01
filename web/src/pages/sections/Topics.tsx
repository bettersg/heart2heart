import { Box, Grid, GridItem, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import PreviewCard from '../../components/Cards/PreviewCard';
import { PrimaryColour, SecondaryColour } from '../../util/constants';

const Topics: React.FC = () => (
  <Grid templateColumns="repeat(2, 1fr)" gap={16} alignItems="center">
    <GridItem>
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <PreviewCard bgimageurl="/images/racism.jpg" alt="racism" />
        <PreviewCard
          bgimageurl="/images/gender_equality.jpg"
          alt="gender_equality"
        />
        <PreviewCard
          bgimageurl="/images/sustainability.jpg"
          alt="sustainability"
        />
        <PreviewCard
          bgimageurl="/images/mental_wellness.jpg"
          alt="mental_wellness"
        />
        <PreviewCard bgimageurl="/images/LGBTQ.jpg" alt="LGBTQ" />
        <PreviewCard
          bgimageurl="/images/climate_change.jpg"
          alt="climate_change"
        />
      </Grid>
    </GridItem>
    <GridItem>
      <>
        <Heading fontSize={{ base: 12, lg: 36 }}>
          <Grid templateColumns="repeat(1fr)" gap={0}>
            <GridItem>
              <HStack>
                <Text color={SecondaryColour}>Choose a topic</Text>
                <Text color={PrimaryColour}>that</Text>
              </HStack>
            </GridItem>
            <GridItem>
              <Text color={PrimaryColour}>resonates with you</Text>
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
            We offer a variety of sessions centered around core social issues
            and themes. Each session draws upon psychological facilitation
            techniques to create a highly intentional experience for each
            participant
          </Text>
        </Box>
      </>
    </GridItem>
  </Grid>
);

export default Topics;
