import React from "react";
import { AiFillApple, AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";

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
export default function NavBar() {
  return (
    <>
      <HStack
        border="1px solid black"
        justifyContent="space-evenly"
        background="blackAlpha.900"
        py={2}
      >
        <AiFillApple color="white" />
        <Link color="gray.300" fontSize="md">
          Store
        </Link>

        <Link color="gray.300" fontSize="md">
          Mac
        </Link>

        <Link color="gray.300" fontSize="md">
          iPad
        </Link>

        <Link color="gray.300" fontSize="md">
          iPhone
        </Link>

        <Link color="gray.300" fontSize="md">
          Watch
        </Link>

        <Link color="gray.300" fontSize="md">
          TV
        </Link>

        <Link color="gray.300" fontSize="md">
          Music
        </Link>

        <Link color="gray.300" fontSize="md">
          Support
        </Link>

        <Link color="gray.300" fontSize="md">
          TV
        </Link>

        <AiOutlineSearch color="white" />

        <BsBag color="white" />
      </HStack>
    </>
  );
}
