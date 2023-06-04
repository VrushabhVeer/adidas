import React, { useEffect } from "react";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWomenProducts } from "../redux/appReducer/action";
import WomenDrawer from "../components/WomenDrawer";

const Womens = () => {
  const dispatch = useDispatch();
  const womensProduct = useSelector((store) => store.appReducer.womensProduct);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location.search || womensProduct.length === 0) {
      const WomensParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
      dispatch(getWomenProducts(WomensParams));
    }
  }, [location.search, dispatch, womensProduct.length, searchParams]);

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
            WOMENS ORIGINALS
          </Text>
          <Text w={{ base: "100%", md: "70%", lg: "62%" }} fontSize="15px">
            Find your perfect match - adidas women's products are beautifully
            designed for whatever life can throw at you. Our range encompasses
            gym-ready t-shirts, tops for chilling out in and much more besides.
            Explore today and find your best fit.
          </Text>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt="3">
          <Flex gap="3">
            <Link to="/">
              <Text textDecoration="underline">Home</Text>
            </Link>
            <Text textDecoration="underline">Women</Text>
          </Flex>

          <WomenDrawer/>
        </Flex>

        <SimpleGrid
          mt="5"
          columns={[1, 2, 3, 4]}
          rowGap={{base:"6", md:"10"}}
          columnGap="2px"
          textAlign="left"
        >
          {womensProduct.map((product) => (
            <Box
              key={product.id}
              _hover={{ border: "1px solid #444444" }}
            >
              <Link to={`/womensProduct/${product.id}`}>
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

export default Womens;
