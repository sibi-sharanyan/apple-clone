import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  HStack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import iphoneBanner from "../assets/iphone-banner.png";

export default function HeroSection() {
  return (
    <VStack>
      <HStack w={"100%"} background="gray.100" justifyContent="center" py={2}>
        <Text fontSize="15">
          We look forward to welcoming you to our stores. Whether you shop in a
          store or shop online, our Specialists can help you buy the products
          you love.
        </Text>
      </HStack>

      <Text fontSize="6xl" fontWeight="semibold">
        iPhone 12
      </Text>

      <Text fontSize="3xl">Blast past fast.</Text>

      <Text w={"25%"} color="gray.400">
        From $29.12/mo. for 24 mo. or $699 before trade-in Buy Directly from
        Apple with special carrier offers
      </Text>

      <HStack w="18rem" justifyContent="space-around">
        <Link color="blue.500" fontSize="2xl">
          Learn more &gt;
        </Link>
        <Link color="blue.500" fontSize="2xl">
          Buy &gt;
        </Link>
      </HStack>

      <Image src={iphoneBanner} alt="iPhone" />
    </VStack>
  );
}
