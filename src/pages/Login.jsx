import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Text
        mt="10"
        textAlign="center"
        fontSize="40px"
        letterSpacing="1.5px"
        fontFamily="Bebas Neue, sans-serif"
      >
        Login
      </Text>
      <Text textAlign="center">JOIN ADICLUB. GET REWARDED TODAY.</Text>
      <Box w={{ base: "90%", md: "60%", lg: "32%" }} m="auto" mt="8">
        <Stack spacing={4}>
          <FormControl position="static" id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              border="1px solid #444444"
              borderRadius="none"
              _hover={{ border: "1px solid #444444" }}
              type="email"
              position="static"
            />
          </FormControl>
          <FormControl position="static" id="password" isRequired pb="5">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                border="1px solid #444444"
                borderRadius="none"
                _hover={{ border: "1px solid #444444" }}
                type={showPassword ? "text" : "password"}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  _hover={{ variant: "ghost" }}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button
            bg="black"
            color="white"
            _hover={{ bg: "#444444" }}
            fontWeight="normal"
            size="lg"
            fontSize="16px"
            borderRadius="none"
            textTransform="uppercase"
            position="static"
          >
            Login
          </Button>
        </Stack>

        <Text textAlign="center" mt="3">
          New user go to{" "}
          <span className="link">
            <Link to="/signup">
              sign up
            </Link>
          </span>
        </Text>
      </Box>
    </>
  );
};

export default Login;
