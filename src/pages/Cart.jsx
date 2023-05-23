import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../redux/cartReducer/action";

const Cart = () => {
  const toast = useToast();
  const cart = useSelector((store) => store.cartReducer.cart);
  const dispatch = useDispatch();

  const handleDec = (id, size) => {
    dispatch(decreaseQty({ id, size }));
  };

  const handleInc = (id, size) => {
    dispatch(increaseQty({ id, size }));
  };

  const hadleRemove = (id, size) => {
    dispatch(removeFromCart({ id, size }));
    toast({
      title: "Removed from Bag",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  let total_price = 0;

  cart.forEach((prod) => {
    total_price += Number(prod.price) * prod.qty;
  });

  return (
    <Flex
      w={{ base: "90%", md: "80%" }}
      m="auto"
      mt={{ base: "10", md: "20" }}
      gap={{ base: "0", md: "16" }}
      flexDirection={{ base: "column", md: "column", lg: "row" }}
    >
      {/* left */}
      <Box w="100%">
        <Box>
          <Text
            fontSize="40px"
            letterSpacing="1.5px"
            fontFamily="Bebas Neue, sans-serif"
          >
            {total_price === 0 ? "Your Bag Is Empty!" : "Your Bag"}
          </Text>
          <Text fontSize="18px">Bag Total [ ₹{total_price} ]</Text>
          <Text>
            Items in your bag are not reserved — check out now to make them
            yours.
          </Text>
        </Box>
        {cart.length > 0 &&
          cart.map((item) => {
            return (
              <Box key={item.id}>
                <Flex w="100%" mt="8" border="1px solid #cecece">
                  <Box w="45%">
                    <Img
                      w="100%"
                      h="100%"
                      src={item.img1}
                      alt="productImg"
                      loading="lazy"
                    />
                  </Box>

                  <Box w="100%" p={{ base: "4", md: "6" }}>
                    <Flex
                      alignItems="flex-start"
                      justifyContent="space-between"
                      gap="3"
                    >
                      <Text fontSize={{ base: "17px", md: "20px" }}>
                        {item.name}
                      </Text>
                      <Button
                        fontSize="19px"
                        onClick={() => hadleRemove(item.id, item.size)}
                        size="sm"
                        variant="ghost"
                        _hover={{ variant: "ghost" }}
                        position="static"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </Button>
                    </Flex>

                    <Text mt="1">
                      Price : ₹<span className="cartPrice">{item.price}</span>
                    </Text>

                    <Text mt="3" display={{ base: "none", md: "flex" }}>
                      Size : {item.size}
                    </Text>

                    <Flex gap="2" mt={{base:"1", md:"5"}} alignItems="center">
                      <Text>Qty :</Text>
                      <Button
                        position="static"
                        size={{base:"sm", md:"md"}}
                        variant="outline"
                        borderRadius="none"
                        onClick={() => handleDec(item.id, item.size)}
                        isDisabled={item.qty === 1}
                      >
                        -
                      </Button>
                      <Text>{item.qty}</Text>
                      <Button
                        position="static"
                        size={{base:"sm", md:"md"}}
                        variant="outline"
                        borderRadius="none"
                        onClick={() => handleInc(item.id, item.size)}
                        isDisabled={item.qty === 4}
                      >
                        +
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            );
          })}

        <Text
          fontSize="15px"
          textDecoration="underline"
          _hover={{ color: "grey" }}
          mt="8"
        >
          Free delivery
        </Text>
        <Text
          fontSize="15px"
          textDecoration="underline"
          _hover={{ color: "grey" }}
        >
          14* day free returns
        </Text>
        <Text
          fontSize="15px"
          textDecoration="underline"
          _hover={{ color: "grey" }}
        >
          Safe & Secure payment options
        </Text>
      </Box>

      {/* right */}
      <Box w={{ base: "100%", md: "60%" }}>
        <Link to="/checkout">
          <Button
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            justifyContent="space-between"
            w="100%"
            bg="black"
            color="white"
            _hover={{ bg: "#444444" }}
            fontWeight="normal"
            size="lg"
            fontSize="16px"
            borderRadius="none"
            position="static"
            textTransform="uppercase"
            isDisabled={cart.length === 0}
          >
            Checkout <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </Link>

        <Text
          fontSize="28px"
          mt="10"
          letterSpacing="1.5px"
          fontFamily="Bebas Neue, sans-serif"
        >
          ORDER SUMMARY
        </Text>

        <Box mt="5">
          <Flex alignItems="center" justifyContent="space-between">
            <Text>Price</Text>
            <Text>₹{total_price}</Text>
          </Flex>

          <Flex alignItems="center" justifyContent="space-between" mt="5">
            <Text>Total Item</Text>
            <Text>0{cart.length}</Text>
          </Flex>

          <Flex alignItems="center" justifyContent="space-between" mt="5">
            <Text>Delivery</Text>
            <Text>FREE</Text>
          </Flex>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            mt="5"
            pt="4"
            borderTop="1px solid #cecece"
            pb="6"
            borderBottom="1px solid #cecece"
          >
            <Box>
              <Text fontWeight="bold" fontSize="17px">
                Total
              </Text>
              <Text color="grey">(Inclusive of all taxes)</Text>
            </Box>
            <Text fontWeight="bold" fontSize="17px">
              ₹ {total_price}
            </Text>
          </Flex>
          <Link to="/checkout">
            <Button
              display={{ base: "flex", md: "none" }}
              alignItems="center"
              justifyContent="space-between"
              w="100%"
              bg="black"
              color="white"
              _hover={{ bg: "#444444" }}
              fontWeight="normal"
              size="lg"
              fontSize="16px"
              borderRadius="none"
              position="static"
            >
              Checkout <i className="fa-solid fa-arrow-right"></i>
            </Button>
          </Link>

          <Box mt="8">
            <Input
              border="1px solid #444444"
              borderRadius="none"
              _hover={{ border: "1px solid #444444" }}
              size="lg"
              fontSize="16px"
              position="static"
              type="text"
              placeholder="Enter your promo code"
            />
          </Box>

          <Box w="98%" m="auto" mt="10">
            <Img
              w="100%"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/visa-maestro-rupay-cod-netbanking-upi-IN_tcm209-983344.png"
              alt="payment_option"
              loading="lazy"
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Cart;
