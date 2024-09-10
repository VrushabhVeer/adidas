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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSignup = async () => {
    const data = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://readit-db-production.up.railway.app/user/signup",
        data
      );

      if (response.data.msg === "Email already exists") {
        toast({
          title: response.data.msg,
          description: "please try different email",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Registration Successful!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Registration failed!",
        description: "please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Text
        mt="10"
        textAlign="center"
        fontSize="40px"
        letterSpacing="1.5px"
        fontFamily="Bebas Neue, sans-serif"
      >
        Sign up
      </Text>
      <Text w="90%" m="auto" textAlign="center">
        Get free shipping, discount vouchers and members only products when
        you’re in adiClub.
      </Text>
      <Box w={{ base: "90%", md: "60%", lg: "32%" }} m="auto" mt="8">
        <Stack spacing={4}>
          <FormControl id="name" isRequired position="static">
            <FormLabel>Full name</FormLabel>
            <Input
              border="1px solid #444444"
              borderRadius="none"
              _hover={{ border: "1px solid #444444" }}
              type="text"
              position="static"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired position="static">
            <FormLabel>Email address</FormLabel>
            <Input
              border="1px solid #444444"
              borderRadius="none"
              _hover={{ border: "1px solid #444444" }}
              type="email"
              position="static"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired position="static" pb="5">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                border="1px solid #444444"
                borderRadius="none"
                _hover={{ border: "1px solid #444444" }}
                type={showPassword ? "text" : "password"}
                required
                onChange={(e) => setPassword(e.target.value)}
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
            position="static"
            textTransform="uppercase"
            onClick={handleSignup}
          >
            Sign up
          </Button>
        </Stack>

        <Text textAlign="center" mt="3">
          Already user go to{" "}
          <span className="link">
            <Link to="/login">login</Link>
          </span>
        </Text>
      </Box>
    </>
  );
};

export default Signup;
