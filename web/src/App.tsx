import {
  Box,
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
import PrivacyPage from './pages/PrivacyPage';
import { useGlobalStore } from './stores';

const App: React.FC = () => {
  const [isSignupOpen, setSignupClose, isNoticeOpen, setNoticeClose] =
    useGlobalStore((state) => [
      state.isSignupModalOpen,
      state.setSignupModalClose,

      state.isNoticeModalOpen,
      state.setNoticeModalClose,
    ]);

  return (
    <Box background="yellow.50">
      <Grid gridTemplateRows={{ base: '75px 1fr 75px', lg: '100px 1fr 100px' }}>
        <GridItem px={{ base: 8, lg: 48 }}>
          <Header />
        </GridItem>
        <GridItem px={{ base: 8, lg: 48 }}>
          <Routes>
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<LandingPage />}>
              <Route index element={<LandingPage />} />
            </Route>
          </Routes>
        </GridItem>
        <GridItem>
          <Footer />
        </GridItem>
      </Grid>
      <Modal
        isCentered
        size={{ base: 'lg', lg: '4xl' }}
        isOpen={isNoticeOpen}
        onClose={setNoticeClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius="3xl">
          <Container>
            <ModalHeader fontSize={{ base: 12, lg: 24 }}>
              Heart2Heart is on hiatus
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text
                align="center"
                fontWeight="bold"
                fontSize={{ base: 8, lg: 16 }}
              >
                Thank you for your interest in Heart2Heart. Unfortunately, due
                to bandwidth constraints, the team has decided to pause work on
                this project indefinitely. We hope you are able to facilitate
                effective conversations in your own ways!
              </Text>
            </ModalBody>
          </Container>
        </ModalContent>
      </Modal>
      <Modal
        isCentered
        size={{ base: 'lg', lg: '4xl' }}
        isOpen={isSignupOpen}
        onClose={setSignupClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius="3xl">
          <Flex>
            <Image
              borderLeftRadius="3xl"
              w={{ base: '100px', lg: '200px' }}
              src="/images/signup_modal_side.png"
            />
            <Container>
              <ModalHeader fontSize={{ base: 12, lg: 24 }}>
                H2H offers a chance for you to be you!
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text
                  align="center"
                  fontWeight="bold"
                  fontSize={{ base: 8, lg: 16 }}
                >
                  Register for our Beta Version Now!
                </Text>
                <Text
                  align="center"
                  my={{ base: 4, lg: 8 }}
                  fontSize={{ base: 8, lg: 16 }}
                >
                  <Link
                    href="https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_251CKKSQxbDJEQm"
                    isExternal
                  >
                    <PrimaryBtn text="Fill up the form here!" />
                  </Link>
                </Text>
                <Text fontWeight="bold" fontSize={{ base: 6, lg: 12 }}>
                  By filling this form, you agree to our{' '}
                  <Link color="blue" href="/privacy" isExternal>
                    privacy notice
                  </Link>{' '}
                  of using our website.
                </Text>
              </ModalBody>
            </Container>
          </Flex>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default App;
