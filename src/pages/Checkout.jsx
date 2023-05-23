import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Checkbox,
  Flex,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((store) => store.cartReducer.cart);
  const [fullname, setFullname] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [addInfo, setAddInfo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = () => {
    const payload = {
      fullname,
      street,
      landmark,
      addInfo,
      city,
      state,
      pin,
      mobile,
    };

    console.log(payload);

    localStorage.setItem("address", JSON.stringify(payload));
  }

  let total_price = 0;

  cart.forEach((prod) => {
    total_price += Number(prod.price) * prod.qty;
  });

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
          SHIPPING ADDRESS
        </Text>

        <Box mt="5">
          <Box mt="8">
            <Input
              border="1px solid #444444"
              borderRadius="none"
              _hover={{ border: "1px solid #444444" }}
              size="lg"
              fontSize="16px"
              position="static"
              placeholder="Full Name *"
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </Box>

          <Box mt="8">
            <Input
              border="1px solid #444444"
              borderRadius="none"
              _hover={{ border: "1px solid #444444" }}
              size="lg"
              fontSize="16px"
              position="static"
              placeholder="Street Address *"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </Box>

          <Box mt="8">
            <Input
              border="1px solid #444444"
              borderRadius="none"
              _hover={{ border: "1px solid #444444" }}
              size="lg"
              fontSize="16px"
              position="static"
              placeholder="Landmark/Area *"
              type="text"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
          </Box>

          <Flex mt="8" alignItems="center" gap="5">
            <Box w="100%">
              <Input
                border="1px solid #444444"
                borderRadius="none"
                _hover={{ border: "1px solid #444444" }}
                size="lg"
                fontSize="16px"
                position="static"
                placeholder="Additional Info"
                type="text"
                value={addInfo}
                onChange={(e) => setAddInfo(e.target.value)}
              />
            </Box>
            <Box w="100%">
              <Input
                border="1px solid #444444"
                borderRadius="none"
                _hover={{ border: "1px solid #444444" }}
                size="lg"
                fontSize="16px"
                position="static"
                placeholder="City *"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Box>
          </Flex>

          <Flex mt="8" alignItems="center" gap="5">
            <Box w="100%">
              <Input
                border="1px solid #444444"
                borderRadius="none"
                _hover={{ border: "1px solid #444444" }}
                size="lg"
                fontSize="16px"
                position="static"
                placeholder="State *"
                type="text"
                list="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <datalist id="state">
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </datalist>
            </Box>
            <Box w="100%">
              <Input
                border="1px solid #444444"
                borderRadius="none"
                _hover={{ border: "1px solid #444444" }}
                size="lg"
                fontSize="16px"
                position="static"
                placeholder="Pin Code *"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                type="number"
              />
            </Box>
          </Flex>
        </Box>

        <Text mt="5" fontWeight="bold">
          Country : India
        </Text>

        {street === "" || city === "" || state === "" || pin === "" ? (
          <Alert position="static" status="warning" mt="5">
            <AlertIcon />
            Please fill the address details.
          </Alert>
        ) : (
          ""
        )}

        <Box border="1px solid #cecece" p="5" mt="10">
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontWeight="bold">STANDARD DELIVERY</Text>
            <Text>FREE</Text>
          </Flex>

          <Text mt="2" fontSize="15px">
            Delivery within:- Metro cities: 2-3 days/ non-metro cities: 4-5 days
          </Text>
        </Box>

        <Box mt="10">
          <Text
            fontSize="32px"
            letterSpacing="1.5px"
            fontFamily="Bebas Neue, sans-serif"
          >
            {" "}
            CONTACT INFORMATION
          </Text>
          <Text>
            We'll use these details to keep you informed on your delivery.
          </Text>

          <Input
            mt="5"
            w={{ base: "100%", md: "50%" }}
            border="1px solid #444444"
            borderRadius="none"
            _hover={{ border: "1px solid #444444" }}
            size="lg"
            fontSize="16px"
            position="static"
            placeholder="Mobile Number *"
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Box>

        <Box mt="10">
          <Checkbox
            position="static"
            borderRadius="none"
            size={{ base: "md", md: "lg" }}
            defaultChecked
          >
            My billing and delivery information are the same.
          </Checkbox>
          <br />
          <Checkbox
            position="static"
            borderRadius="none"
            size={{ base: "md", md: "lg" }}
            mt="5"
            defaultChecked
          >
            I accept the Terms & Conditions and Privacy Policy.
          </Checkbox>
        </Box>

        <Link to="/payment">
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
            onClick={handleSubmit}
            isDisabled={street === "" || city === "" || state === "" || pin === ""}
          >
            To Payment <i className="fa-solid fa-arrow-right"></i>
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

export default Checkout;
