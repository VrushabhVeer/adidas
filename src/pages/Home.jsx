import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import shoes from "../assets/shoes.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* WHO ARE YOU SHOPPING FOR? */}

      <Box w="85%" m="auto" mt={{ base: "10", md: "20" }}>
        <Text
          letterSpacing="1.5px"
          fontFamily="Bebas Neue, sans-serif"
          fontSize={{ base: "32px", md: "40px" }}
        >
          WHO ARE YOU SHOPPING FOR?
        </Text>
        <Flex
          alignItems="center"
          gap="10"
          mt="5"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box w="100%">
            <Link to="/mens">
              <Image
                w="100%"
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/Visual_nav_tiles_March_2023_Mobile_800x900px_1-MENS_DUAL_tcm209-1008384.jpg"
                alt="men"
                loading="lazy"
              />

              <Text
                letterSpacing="1.5px"
                fontFamily="Bebas Neue, sans-serif"
                fontSize="25px"
                mt="3"
              >
                Men
              </Text>
            </Link>
          </Box>

          <Box w="100%">
            <Link to="/womens">
              <Image
                w="100%"
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/Visual_nav_tiles_March_2023_Mobile_800x900px_2-WOMENS_DUAL_tcm209-1008385.jpg"
                alt="women"
                loading="lazy"
              />

              <Text
                letterSpacing="1.5px"
                fontFamily="Bebas Neue, sans-serif"
                fontSize="25px"
                mt="3"
              >
                Women
              </Text>
            </Link>
          </Box>

          <Box w="100%">
            <Link to="/shoes">
              <Image w="100%" src={shoes} alt="shoes" loading="lazy" />

              <Text
                letterSpacing="1.5px"
                fontFamily="Bebas Neue, sans-serif"
                fontSize="25px"
                mt="3"
              >
                Shoes
              </Text>
            </Link>
          </Box>
        </Flex>
      </Box>



      {/* WHAT'S HOT */}

      <Box w="85%" m="auto" mt={{ base: "10", md: "20" }}>
        <Text
          letterSpacing="1.5px"
          fontFamily="Bebas Neue, sans-serif"
          fontSize={{ base: "32px", md: "40px" }}
        >
          WHAT'S HOT
        </Text>
        <SimpleGrid w="100%" columns={[1, 2, 2, 4]} spacing="8" mt="5">
          <Box w="100%">
            <Image
              w="100%"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/ss23-bape-drop-2-embargo-non-confirmed-hp-tc-d_tcm209-1018677.jpg"
              alt="shoe"
              loading="lazy"
            />
            <Text
              letterSpacing="1.5px"
              fontFamily="Bebas Neue, sans-serif"
              fontSize="20px"
              mt="4"
            >
              adidas Forum 84 BAPE® Low
            </Text>
            <Text mt="3">
              The iconic adidas Superstar gets a Mexico City-inspired makeover.
            </Text>
            <Text textDecoration="underline" mt="5">
              Shop Now
            </Text>
          </Box>

          <Box w="100%">
            <Image
              w="100%"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/1050x1400_pdx_tcm209-1026163.jpg"
              alt="shoes"
              loading="lazy"
            />
            <Text
              letterSpacing="1.5px"
              fontFamily="Bebas Neue, sans-serif"
              fontSize="20px"
              mt="4"
            >
              CHOCOLATE, STRAWBERRY OR VANILLA?
            </Text>
            <Text mt="3">
              Sartorial streetwear meets sports heritage as footwear icons of
              adidas and Gucci unite.
            </Text>
            <Text textDecoration="underline" mt="5">
              Shop Now
            </Text>
          </Box>

          <Box w="100%">
            <Image
              w="100%"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/football-ss23-fcbayern-home-onsite-tcc_tcm209-1021900.jpg"
              alt="fc-bayern"
              loading="lazy"
            />
            <Text
              letterSpacing="1.5px"
              fontFamily="Bebas Neue, sans-serif"
              fontSize="20px"
              mt="4"
            >
              FC Bayern 23/24 Home Kit
            </Text>
            <Text mt="3">
              Inspired by the kit the club wore in its first season in the
              Bundesliga.
            </Text>
            <Text textDecoration="underline" mt="5">
              Shop Now
            </Text>
          </Box>

          <Box w="100%">
            <video
              src="https://brand.assets.adidas.com/image/upload/q_auto,vc_auto,c_scale,w_0.5/enIN/Images/football-ss23-juventus-home-onsite-tcc_tcm209-1019472.mp4"
              loop
              autoPlay
              playsInline
              muted
            />
            <Text
              letterSpacing="1.5px"
              fontFamily="Bebas Neue, sans-serif"
              fontSize="20px"
              mt="4"
            >
              Juventus 23/24 home kit
            </Text>
            <Text mt="3">
              Inspired by the iconic Zebra element to combine tradition and
              innovation.
            </Text>
            <Text textDecoration="underline" mt="5">
              Shop Now
            </Text>
          </Box>
        </SimpleGrid>
      </Box>



      {/* Now Trending */}

      <Box w="85%" m="auto" mt={{ base: "10", md: "20" }}>
        <Text
          letterSpacing="1.5px"
          fontFamily="Bebas Neue, sans-serif"
          fontSize={{ base: "32px", md: "40px" }}
        >
          Now Trending
        </Text>
        <SimpleGrid w="100%" columns={[1, 2, 2, 4]} spacing="8" mt="5">
          <Box>
            <Box>
              <video
                src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/football-fw22-x-speedportal-pre-launch-hp-teaser-carousel-animated-d_hunvkb.mp4"
                loop
                autoPlay
                playsInline
                muted
              />
            </Box>
            <Box mt="4">
              <Text
                letterSpacing="1.5px"
                fontFamily="Bebas Neue, sans-serif"
                fontSize="20px"
              >
                FASTER IN ALL DIMENSIONS
              </Text>
              <Text textDecoration="underline" mt="4">
                Shop Now
              </Text>
            </Box>
          </Box>
          <Box>
            <Box>
              <Image
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/fw22-football-manchesterunited-third-hp-tcc_tcm209-914959.jpg"
                alt="MAN-UTD"
                loading="lazy"
              />
            </Box>
            <Box mt="4">
              <Text
                letterSpacing="1.5px"
                fontFamily="Bebas Neue, sans-serif"
                fontSize="20px"
              >
                MAN UTD 22/23 THIRD KIT
              </Text>
              <Text textDecoration="underline" mt="4">
                Shop Now
              </Text>
            </Box>
          </Box>
          <Box>
            <Box>
              <Image
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/1050x1400TC_tcm209-932324.jpg"
                alt="ranvir-singh"
                loading="lazy"
              />
            </Box>
            <Box mt="4">
              <Text
                letterSpacing="1.5px"
                fontFamily="Bebas Neue, sans-serif"
                fontSize="20px"
              >
                CREATE NEW PATHS
              </Text>
              <Text textDecoration="underline" mt="4">
                Shop Now
              </Text>
            </Box>
          </Box>
          <Box>
            <Box>
              <Image
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/fw22-football-juventus-away-hp-tcc_tcm209-906530.jpg"
                alt="JUVENTUS"
                loading="lazy"
              />
            </Box>
            <Box mt="4">
              <Text
                letterSpacing="1.5px"
                fontFamily="Bebas Neue, sans-serif"
                fontSize="20px"
              >
                JUVENTUS 22/23 AWAY KIT
              </Text>
              <Text textDecoration="underline" mt="4">
                Shop Now
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Home;
