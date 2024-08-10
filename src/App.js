import React from 'react';
import { Box, ChakraProvider, Flex, Heading, Text, VStack, Image } from '@chakra-ui/react';
import BookingForm from './BookingForm';
import { motion } from 'framer-motion';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <HeroSection />
        <BookingForm />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

const Header = () => (
  <Flex as="header" p={4} bg="yellow.400" align="center" justify="space-between">
    <Heading as="h1" size="lg">Little Lemon</Heading>
  </Flex>
);

const HeroSection = () => (
  <Box
    as={motion.section}
    bgImage="url('/path-to-hero-image.jpg')"
    opacity="0.1"
    bgSize="cover"
    bgPos="center"
    h="400px"
    color="black"
    d="flex"
    alignItems="center"
    justifyContent="center"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >

    {/* Konten yang ditampilkan di atas overlay */}
    <VStack zIndex="2" textAlign="center">
      <Heading size="2xl">Welcome to Little Lemon</Heading>
      <Text fontSize="lg">Book your table now and enjoy an unforgettable dining experience.</Text>
    </VStack>
  </Box>
);

const Footer = () => (
  <Box as="footer" p={4} bg="yellow.400" mt={8} textAlign="center">
    <Text>&copy; 2024 Little Lemon. All rights reserved.</Text>
  </Box>
);

export default App;
