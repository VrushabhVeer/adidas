import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import sneakers from "../assets/sneakers.png";
import { Link } from "react-router-dom";

const OrderPlaced = () => {
    return (
        <Box
            w={{ base: "90%", md: "60%", lg: "32%" }}
            m="auto"
            mt="10"
            textAlign="center"
        >
            <Box>
                <Box w="25%" m="auto">
                    <Player
                        autoplay
                        loop
                        src="https://assets8.lottiefiles.com/private_files/lf30_dfspihm8.json"
                    ></Player>
                </Box>
                <Text
                    fontSize="60px"
                    letterSpacing="1.5px"
                    fontFamily="Bebas Neue, sans-serif"
                >
                    Order Placed
                </Text>
                <Text>Thank You for shopping with us.</Text>
                <Text>
                    Confirmation mail and order details sent to your registered email.
                </Text>
            </Box>

            <Flex
                mt="12"
                alignItems="center"
                justifyContent="center"
                gap={{ base: "0", md: "5" }}
                flexDirection={{ base: "column", md: "row" }}
            >
                <Box>
                    <Link to="/">
                        <Text fontSize={{ base: "32px", md: "38px" }} letterSpacing="-1px">
                            Continue Shopping
                        </Text>
                    </Link>
                </Box>

                <Box>
                    <Link to="/">
                        <Img w="90px" src={sneakers} alt="sneakers" loading="lazy"/>
                    </Link>
                </Box>
            </Flex>
        </Box>
    );
};

export default OrderPlaced;
