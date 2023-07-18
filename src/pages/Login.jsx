import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
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
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = () => {
    const payload = {
      email,
      password,
    };
    console.log(payload);

    axios
      .post("https://sleepy-calf-panama-hat.cyclic.app/user/login", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data.token);

        toast({
          title: "Login Successful!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        const { from } = location.state || { from: { pathname: "/" } };
        navigate(from);
      })
      .catch((error) => {
        console.error(error);

        toast({
          title: "Login failed!",
          description: "please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const token = localStorage.getItem("token");

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
        {token ? (
          <Alert status="warning" fontSize="15px" borderRadius="5" p="2" mt="5">
            <AlertIcon />
            you are already login!
          </Alert>
        ) : (
          ""
        )}

        <Stack spacing={4} mt="3">
          <FormControl position="static" id="email" isRequired>
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
          <FormControl position="static" id="password" isRequired pb="5">
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
            textTransform="uppercase"
            position="static"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Stack>

        <Text textAlign="center" mt="3">
          New user go to{" "}
          <span className="link">
            <Link to="/signup">sign up</Link>
          </span>
        </Text>
      </Box>
    </>
  );
};

export default Login;
