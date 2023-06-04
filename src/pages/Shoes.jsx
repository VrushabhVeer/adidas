import React, { useEffect } from "react";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getShoesData } from "../redux/appReducer/action";
import ShoeDrawer from "../components/ShoeDrawer";

const Shoes = () => {
  const dispatch = useDispatch();
  const shoes = useSelector((store) => store.appReducer.shoes);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location.search || shoes.length === 0) {
      const ShoeParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
      dispatch(getShoesData(ShoeParams));
    }
  }, [location.search, dispatch, shoes.length, searchParams]);

  return (
    <>
      <Box w={{ base: "90%", md: "82%" }} m="auto">
        <Box mt="10">
          <Text
            fontSize={{ base: "30px", md: "40px" }}
            letterSpacing="1.5px"
            fontFamily="Bebas Neue, sans-serif"
            fontStyle="italic"
          >
            ADIDAS ORIGINALS
          </Text>
          <Text w={{ base: "100%", md: "70%", lg: "62%" }} fontSize="15px">
            adidas sneakers, boots, running, football shoes are all sit right at
            the apex of where technology meets fashion in the world of superior
            footwear. Do right by your feet every day, the 3-Stripes way.
          </Text>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt="3">
          <Flex gap="3">
            <Link to="/">
              <Text textDecoration="underline">Home</Text>
            </Link>
            <Text textDecoration="underline">Shoe</Text>
          </Flex>
          
          <ShoeDrawer />
        </Flex>
        <SimpleGrid
          mt="5"
          columns={[1, 2, 3, 4]}
          rowGap={{base:"6", md:"10"}}
          columnGap="2px"
          textAlign="left"
        >
          {shoes.map((product) => (
            <Box
              key={product.id}
              _hover={{ border: "1px solid #444444" }}
            >
              <Link to={`/shoes/${product.id}`}>
                <Box>
                  <Image src={product.img1} alt="product_img" loading="lazy" />
                </Box>
                <Box p="3">
                  <Text fontSize={{ base: "16px", md: "18px" }}>
                    {product.name}
                  </Text>
                  <Text
                    mt="1"
                    color="#6b34fb"
                    fontStyle="italic"
                    fontSize={{ base: "15px", md: "16px" }}
                  >
                    Mens Originals
                  </Text>
                  <Text fontSize={{ base: "15px", md: "16px" }}>
                    MRP. ₹ <span className="price">{product.price}</span>
                  </Text>
                </Box>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Shoes;
