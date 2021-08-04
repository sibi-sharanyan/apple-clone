import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import MidSections from "./components/MidSections";
import ShowCase from "./components/ShowCase";
import Footer from "./components/Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <NavBar />

      <HeroSection />

      <MidSections />

      <ShowCase />
      <Footer />
    </Box>
  </ChakraProvider>
);
