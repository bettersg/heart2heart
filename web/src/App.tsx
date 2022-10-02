import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import PrimaryBtn from './components/Buttons/PrimaryBtn';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import { useGlobalStore } from './stores';

const App: React.FC = () => {
  const [isOpen, setClose] = useGlobalStore((state) => [
    state.isSignupModalOpen,
    state.setSignupModalClose,
  ]);

  return (
    <Box background="yellow.50">
      <Grid gridTemplateRows={{ base: '75px 1fr 75px', lg: '100px 1fr 100px' }}>
        <GridItem px={{ base: 8, lg: 48 }}>
          <Header />
        </GridItem>
        <GridItem px={{ base: 8, lg: 48 }}>
          <Routes>
            <Route path="*" element={<LandingPage />}>
              <Route index element={<LandingPage />} />
            </Route>
          </Routes>
        </GridItem>
        <GridItem>
          <Footer />
        </GridItem>
      </Grid>
      <Modal isCentered size="3xl" isOpen={isOpen} onClose={setClose}>
        <ModalOverlay />
        <ModalContent>
          <Flex>
            <Image w="200px" src="/images/signup_modal_side.png" />
            <Container>
              <ModalHeader>H2H offers a chance for you to be you!</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text align="center" fontWeight="bold" mb="1rem">
                  Register for our Beta Version Now!
                </Text>
                <Center>
                  <Link
                    href="https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_251CKKSQxbDJEQm"
                    isExternal
                  >
                    <PrimaryBtn text="Fill up the form here!" />
                  </Link>
                </Center>
              </ModalBody>
            </Container>
          </Flex>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default App;
