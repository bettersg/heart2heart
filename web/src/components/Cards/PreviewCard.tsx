import { GridItem, Img } from '@chakra-ui/react';
import React from 'react';

interface IPreviewCard {
  alt: string;
  bgimageurl?: string;
}

const PreviewCard: React.FC<IPreviewCard> = ({
  alt = 'xxx',
  bgimageurl = '',
}) => (
  <GridItem>
    <Img
      boxSize={{ base: '50px', lg: '175px' }}
      objectFit="fill"
      src={bgimageurl}
      alt={alt}
    />
  </GridItem>
);

export default PreviewCard;
