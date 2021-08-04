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
  Icon,
} from "@chakra-ui/react";
import Mac from "../assets/mac.png";
import watch from "../assets/watch.png";

import { AiFillApple, AiOutlineSearch } from "react-icons/ai";

export default function ShowCase() {
  return (
    <>
      <VStack mt={2}>
        <HStack w="100%">
          <VStack background="#FAFAFA" w="50%">
            <Text fontSize="6xl" fontWeight="semibold">
              iMac
            </Text>

            <Text fontSize="3xl">Say hello.</Text>

            <HStack w="18rem" justifyContent="space-around">
              <Link color="blue.500" fontSize="2xl">
                Learn more &gt;
              </Link>
              <Link color="blue.500" fontSize="2xl">
                Buy &gt;
              </Link>
            </HStack>
            <Image src={Mac} alt="mac" />
          </VStack>

          <VStack background="#000000" w="50%">
            <VStack>
              <HStack>
                <Icon as={AiFillApple} color="white" fontSize="6xl" />

                <Text fontSize="6xl" fontWeight="semibold" color="white">
                  Watch
                </Text>
              </HStack>
              <Text
                color="red.600"
                textTransform="uppercase"
                fontSize="md"
                letterSpacing="widest"
              >
                Series 6
              </Text>
            </VStack>

            <Text fontSize="3xl" color="white">
              The future of health is on your wrist.
            </Text>

            <HStack w="18rem" justifyContent="space-around">
              <Link color="blue.500" fontSize="2xl">
                Learn more &gt;
              </Link>
              <Link color="blue.500" fontSize="2xl">
                Buy &gt;
              </Link>
            </HStack>
            <Image src={watch} alt="mac" />
          </VStack>
        </HStack>
      </VStack>
    </>
  );
}
