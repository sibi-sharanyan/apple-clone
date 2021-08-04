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
  Image,
} from "@chakra-ui/react";

import iphoneBanner2 from "../assets/iphone-banner2.png";
import ipadPro from "../assets/ipad-pro.png";

export default function MidSections() {
  return (
    <>
      <VStack>
        <VStack w="100%" background="#000000" py={6}>
          <Text fontSize="6xl" fontWeight="semibold" color="white">
            iPhone 12
          </Text>

          <Text fontSize="3xl" color="white">
            Blast past fast.
          </Text>

          <Text w={"25%"} color="gray.400">
            From $41.62/mo. for 24 mo. or $999 before trage-in Buy Directly from
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

          <Image src={iphoneBanner2} alt="iPhone" />
        </VStack>

        <VStack w="100%" background="#000000" py={6}>
          <Text fontSize="6xl" fontWeight="semibold" color="white">
            iPad Pro
          </Text>

          <Text fontSize="3xl" color="white">
            Supercharged by the Apple M1 chip.
          </Text>

          <HStack w="18rem" justifyContent="space-around">
            <Link color="blue.500" fontSize="2xl">
              Learn more &gt;
            </Link>
            <Link color="blue.500" fontSize="2xl">
              Buy &gt;
            </Link>
          </HStack>

          <Image src={ipadPro} alt="iPhone" />
        </VStack>
      </VStack>
    </>
  );
}
