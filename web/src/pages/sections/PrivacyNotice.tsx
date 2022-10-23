import { Stack, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface IPrivacyNotice {
  title: string;
  content: ReactNode;
}

const PrivacyNotice: React.FC<IPrivacyNotice> = ({
  title = '',
  content = '',
}) => (
  <Stack spacing={4}>
    <Text fontSize={{ base: 12, lg: 24 }} fontWeight="bold">
      {title}
    </Text>
    <Text fontSize={{ base: 8, lg: 16 }}>{content}</Text>
  </Stack>
);

export default PrivacyNotice;
