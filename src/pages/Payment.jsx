import { Box, Button, Flex, Img, Input, Radio, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Payment = () => {
  const cart = useSelector((store) => store.cartReducer.cart);

  let total_price = 0;

  cart.forEach((prod) => {
    total_price += Number(prod.price) * prod.qty;
  });

  let address = JSON.parse(localStorage.getItem("address"));
  console.log(address);

  return (
    <Flex
      w={{ base: "90%", md: "80%" }}
      m="auto"
      mt={{ base: "10", md: "20" }}
      gap="16"
      flexDirection={{ base: "column", md: "column", lg: "row" }}
    >
      {/* left */}
      <Box w="100%">
        <Text
          fontSize="40px"
          letterSpacing="1.5px"
          fontFamily="Bebas Neue, sans-serif"
        >
          PAYMENT METHOD
        </Text>

        <Flex mt="3" p="5" bg="#eceff1" alignItems="center" gap="3">
          <Img
            src="https://www.adidas.co.in/static/checkout/react/345f0b7/assets/img/payment_trust_symbol.svg"
            loading="lazy"
            alt=""
          />
          <Text fontSize="15px">
            Payments are SSL encrypted so that your credit card and payment
            details stay safe.
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          p="5"
          mt="10"
          border="1px solid #cecece"
        >
          <Radio position="static" size={{ base: "md", md: "lg" }}>UPI</Radio>
          <Img
            w="8"
            src="https://www.adidas.co.in/static/checkout/react/345f0b7/assets/img/icon-adidas-upi.svg"
            loading="lazy"
            alt="upi"
          />
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          p="5"
          mt="4"
          border="1px solid #cecece"
        >
          <Radio position="static" size={{ base: "md", md: "lg" }}>CREDIT CARD</Radio>

          <Flex alignItems="center" gap="1">
            <Img
              w="10"
              src="https://www.adidas.co.in/static/checkout/react/345f0b7/assets/img/icon-adidas-master-card.svg"
              loading="lazy"
              alt="master_card"
            />
            <Img
              w="10"
              src="https://www.adidas.co.in/static/checkout/react/345f0b7/assets/img/icon-adidas-visa.svg"
              loading="lazy"
              alt="visa"
            />
            <Img
              w="12"
              src="https://www.adidas.co.in/static/checkout/react/345f0b7/assets/img/icon-adidas-rupay.svg"
              loading="lazy"
              alt="rupay"
            />
          </Flex>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          p="5"
          mt="4"
          border="1px solid #cecece"
        >
          <Radio position="static" size={{ base: "md", md: "lg" }}>NET BANKING</Radio>
          <Img
            w="7"
            src="https://www.adidas.co.in/static/checkout/react/345f0b7/assets/img/icon-adidas-online-banking.svg"
            loading="lazy"
            alt="net_banking"
          />
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          p="5"
          mt="4"
          border="1px solid #cecece"
        >
          <Radio position="static" size={{ base: "md", md: "lg" }}>CASH ON DELIVERY</Radio>
          <Img
            w="8"
            src="https://www.adidas.co.in/static/checkout/react/345f0b7/assets/img/icon-adidas-cash-on-delivery.svg"
            loading="lazy"
            alt="cod"
          />
        </Flex>

        <Link to="/order_placed">
          <Button
            mt="10"
            w={{ base: "100%", md: "50%" }}
            alignItems="center"
            gap="5"
            bg="black"
            color="white"
            _hover={{ bg: "#444444" }}
            fontWeight="normal"
            size="lg"
            fontSize="16px"
            borderRadius="none"
            position="static"
            textTransform="uppercase"
          >
            Place Order<i className="fa-solid fa-arrow-right"></i>
          </Button>
        </Link>
      </Box>

      {/* right */}
      <Box w={{ base: "100%", md: "60%" }}>
        <Text
          fontSize="28px"
          letterSpacing="1.5px"
          fontFamily="Bebas Neue, sans-serif"
        >
          ORDER SUMMARY
        </Text>

        <Box mt="5">
          <Flex alignItems="center" justifyContent="space-between">
            <Text>Price</Text>
            <Text> ₹{total_price}</Text>
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
              ₹{total_price}
            </Text>
          </Flex>

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
        </Box>

        <Box mt="10" borderTop="1px solid #444444" pt="3">
          <Text
            fontSize="22px"
            letterSpacing="1.5px"
            fontFamily="Bebas Neue, sans-serif"
          >
            Delivery Address
          </Text>

          <Text mt="1">{address.fullname}</Text>
          <Text>{address.street}</Text>
          <Text>{address.landmark}</Text>
          <Text>{address.addInfo}</Text>
          <Text>{address.city}, {address.state}, {address.pin}, IN</Text>
          <Text mt="1">+91 {address.mobile}</Text>
        </Box>

        <Box mt="6">
          <Text
            fontSize="22px"
            letterSpacing="1.5px"
            fontFamily="Bebas Neue, sans-serif"
          >
            Billing Address
          </Text>

          <Text mt="1">{address.fullname}</Text>
          <Text>{address.street}</Text>
          <Text>{address.landmark}</Text>
          <Text>{address.addInfo}</Text>
          <Text>{address.city}, {address.state}, {address.pin}, IN</Text>
          <Text mt="1">+91 {address.mobile}</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Payment;
