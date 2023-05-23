import { Text, Flex, Box } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <>
      <Box
        w="100%"
        bg="black"
        color="#f2f2f2"
        textAlign="center"
        p="2"
        fontSize="14px"
      >
        SIGN UP & GET 15% OFF
      </Box>
      <Flex
        bg="gray.100"
        justifyContent="flex-end"
        px="12"
        pt="3"
        display={{ base: "none", md: "flex" }}
      >
        <Flex alignItems="center" gap="4">
          <Text _hover={{ textDecoration: "underline" }} fontSize="11px">
            help
          </Text>
          <Text _hover={{ textDecoration: "underline" }} fontSize="11px">
            returns
          </Text>
          <Text _hover={{ textDecoration: "underline" }} fontSize="11px">
            track order
          </Text>
          <Text _hover={{ textDecoration: "underline" }} fontSize="11px">
            privacy policy
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
