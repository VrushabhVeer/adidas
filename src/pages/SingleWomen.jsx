import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartReducer/action";

const SingleWomen = () => {
  const toast = useToast();
  const params = useParams();
  const [data, setData] = useState({});
  const [size, setSize] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://busy-gray-tortoise-wrap.cyclic.app/womensproduct/${params.product_id}`
      )
      .then((res) => res.data)
      .then((res) => {
        setData(res);
      });
  }, [params]);

  const handleCart = () => {
    let payload = {
      ...data,
      size,
    };
    dispatch(addToCart(payload));
    console.log(payload);
    toast({
      title: "Added To Cart",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Flex
        w={{ base: "100%", md: "95%" }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Box w="100%">
          <Box display={{ base: "inherit", md: "none" }} p="5">
            <Flex alignItems="center" gap="8">
              <Text
                fontStyle="italic"
                color="#6b34fb"
                fontSize={{ base: "16px", md: "18px" }}
              >
                {data.type} •
              </Text>
              <Text fontSize={{ base: "16px", md: "18px" }}>{data.rating}</Text>
            </Flex>

            <Box mt="3">
              <Text
                fontSize="25px"
                letterSpacing="1.5px"
                fontFamily="Bebas Neue, sans-serif"
              >
                {data.name}
              </Text>

              <Text mt="1">MRP in Indian currency:</Text>
              <Text>
                <span className="price">₹ {data.price}</span> per unit
              </Text>
              <Text>(Inclusive of all taxes)</Text>
            </Box>
          </Box>

          <SimpleGrid columns={[1, 1, 2, 2]} spacing="1px">
            <Box>
              <Img src={data.img1} alt="productImg1" loading="lazy" />
            </Box>
            <Box>
              <Img src={data.img2} alt="productImg2" loading="lazy" />
            </Box>
            <Box>
              <Img src={data.img3} alt="productImg3" loading="lazy" />
            </Box>
            <Box>
              <Img src={data.img4} alt="productImg4" loading="lazy" />
            </Box>
          </SimpleGrid>
        </Box>

        <Box w={{ base: "100%", md: "70%", lg: "35%" }} p="8">
          <Box display={{ base: "none", md: "inherit" }}>
            <Flex alignItems="center" gap="8">
              <Text
                fontStyle="italic"
                color="#6b34fb"
                fontSize={{ base: "16px", md: "18px" }}
              >
                Mens Original •
              </Text>
              <Text fontSize={{ base: "16px", md: "18px" }}>{data.rating}</Text>
            </Flex>

            <Box mt="5">
              <Text
                fontSize="25px"
                letterSpacing="1.5px"
                fontFamily="Bebas Neue, sans-serif"
              >
                {data.name}
              </Text>

              <Text mt="3">MRP in Indian currency:</Text>
              <Text>
                <span className="price">₹ {data.price}</span> per unit
              </Text>
              <Text>(Inclusive of all taxes)</Text>
            </Box>
          </Box>

          <Box mt={{ base: "0", md: "10" }}>
            <Text fontWeight="bold">Sizes</Text>

            <HStack spacing="1" direction="row" align="center" mt="3">
              <Button
                position="static"
                onClick={(e) => setSize(e.target.value)}
                value="XS"
                fontWeight="light"
                colorScheme="blackAlpha"
                w="10"
                size="md"
                borderRadius="none"
              >
                XS
              </Button>
              <Button
                position="static"
                onClick={(e) => setSize(e.target.value)}
                value="S"
                fontWeight="light"
                colorScheme="blackAlpha"
                w="10"
                size="md"
                borderRadius="none"
              >
                S
              </Button>
              <Button
                position="static"
                onClick={(e) => setSize(e.target.value)}
                value="M"
                fontWeight="light"
                colorScheme="blackAlpha"
                w="10"
                size="md"
                borderRadius="none"
              >
                M
              </Button>
              <Button
                position="static"
                onClick={(e) => setSize(e.target.value)}
                value="L"
                fontWeight="light"
                colorScheme="blackAlpha"
                w="10"
                size="md"
                borderRadius="none"
              >
                L
              </Button>
              <Button
                position="static"
                onClick={(e) => setSize(e.target.value)}
                value="XL"
                fontWeight="light"
                colorScheme="blackAlpha"
                w="10"
                size="md"
                borderRadius="none"
              >
                XL
              </Button>
              <Button
                position="static"
                onClick={(e) => setSize(e.target.value)}
                value="2XL"
                fontWeight="light"
                colorScheme="blackAlpha"
                w="10"
                size="md"
                borderRadius="none"
              >
                2XL
              </Button>
            </HStack>
            <Text color="tomato" mt="2">
              {!size ? (
                <>
                  <i className="fa-solid fa-circle-exclamation" /> Please Select
                  The Size
                </>
              ) : (
                " "
              )}
            </Text>
          </Box>

          <Link to="/size_guide">
            <Text textDecoration="underline" mt="5">
              <i className="fa-solid fa-ruler-horizontal"></i> Size guide
            </Text>
          </Link>

          <Button
            alignItems="center"
            gap="5"
            w="100%"
            bg="black"
            color="white"
            _hover={{ bg: "#444444" }}
            fontWeight="normal"
            size="lg"
            mt="10"
            fontSize="16px"
            borderRadius="none"
            position="static"
            textTransform="uppercase"
            isDisabled={!size}
            onClick={handleCart}
          >
            Add to Cart <i className="fa-solid fa-arrow-down"></i>
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default SingleWomen;
