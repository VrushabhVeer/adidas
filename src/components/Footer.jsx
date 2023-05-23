import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box mt="100" bg="gray.100" p="10">
        <SimpleGrid
          w={{ base: "none", md: "85%" }}
          m="auto"
          columns={[1, 2, 4]}
          spacing={{ base: "30px", md: "50px" }}
        >
          <Box>
            <Text fontWeight="bold">PRODUCTS</Text>
            <Text fontSize="15px" mt="1">
              Footwear
            </Text>
            <Text fontSize="15px">Clothing</Text>
            <Text fontSize="15px">Accessories</Text>
            <Text fontSize="15px">Outlet – Sale</Text>
            <Text fontSize="15px">New Arrivals</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">COMPANY INFO</Text>
            <Text fontSize="15px" mt="1">
              About Us
            </Text>
            <Text fontSize="15px">adidas stories</Text>
            <Text fontSize="15px">adidas Apps</Text>
            <Text fontSize="15px">Entity Details</Text>
            <Text fontSize="15px">Careers</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">SUPPORT</Text>
            <Text fontSize="15px" mt="1">
              Help
            </Text>
            <Text fontSize="15px">Customer Services</Text>
            <Text fontSize="15px">Returns & Exchanges</Text>
            <Text fontSize="15px">Shipping</Text>
            <Text fontSize="15px">Order Tracker</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">CONNECT US</Text>
            <Flex gap="3" mt="3" fontSize="18">
              <i className="fa-brands fa-youtube" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-twitter" />
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>

      <Box bg="#282c31" color="#f2f2f2" p="4" textAlign="center">
        <Text fontSize="14px">© 2023 adidas, Made by Vrushabh Veer.</Text>
      </Box>
    </>
  );
};

export default Footer;
