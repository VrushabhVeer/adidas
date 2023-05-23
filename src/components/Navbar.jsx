import {
    Box,
    Flex,
    HStack,
    IconButton,
    Text,
    useDisclosure,
    Stack,
    Img,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import adidas from "../assets/adidas.png";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cart = useSelector((store) => store.cartReducer.cart);

    return (
        <>
            <Header />
            <Box
                bg="gray.100"
                px={{ base: "5", md: "12" }}
                position="sticky"
                top="0"
            >
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                        variant={"ghost"}
                        _hover={{ variant: "ghost" }}
                    />

                    <Box>
                        <Link to="/">
                            <Img w="55px" src={adidas} alt="logo" />
                        </Link>
                    </Box>

                    <HStack
                        as={"nav"}
                        spacing={5}
                        display={{ base: "none", md: "flex" }}
                    >

                        <Link to="/"><Text _hover={{ textDecoration: "underline" }}>Home</Text></Link>
                        <Link to="/mens"><Text _hover={{ textDecoration: "underline" }}>Men</Text></Link>
                        <Link to="/womens"><Text _hover={{ textDecoration: "underline" }}>Women</Text></Link>
                        <Link to="/shoes"><Text _hover={{ textDecoration: "underline" }}>Shoes</Text></Link>
                    </HStack>

                    <HStack as={"nav"} spacing={5}>
                        <Link to="/signup"><Text _hover={{ textDecoration: "underline" }} display={{ base: "none", md: "flex" }}>Sign up</Text></Link>
                        <Link to="/login"><Text _hover={{ textDecoration: "underline" }} display={{ base: "none", md: "flex" }}>Login</Text></Link>
                        <Link to="/cart">
                            <Flex gap="0">
                                <Text fontSize="19px" position="initial">
                                    <i className="fa-sharp fa-solid fa-bag-shopping"></i>
                                </Text>
                                
                                {cart.length === 0 ? "" : <Text fontSize="14px" bg="#3470e4" color="white" px="1.5" mb="2" borderRadius="50">{cart.length}</Text>}
                            </Flex>
                        </Link>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={8} pt={5} pl={3} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            <Link to="/mens"><Text _hover={{ textDecoration: "underline" }}>Men</Text></Link>
                            <Link to="/womens"><Text _hover={{ textDecoration: "underline" }}>Women</Text></Link>
                            <Link to="/shoes"><Text _hover={{ textDecoration: "underline" }}>Shoes</Text></Link>
                            <Link to="/signup"><Text _hover={{ textDecoration: "underline" }}>Sign up</Text></Link>
                            <Link to="/login"><Text _hover={{ textDecoration: "underline" }}>Login</Text></Link>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
