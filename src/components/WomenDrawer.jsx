import {
    Box,
    Button,
    Checkbox,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function WomenDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [searchParams, setSearchParams] = useSearchParams();
    const CategoryParams = searchParams.getAll("category");
    const [category, setCategory] = useState(CategoryParams || []);

    const handleChange = (e) => {
        const option = e.target.value;

        let newCategary = [...category];

        if (category.includes(option)) {
            newCategary.splice(newCategary.indexOf(option), 1);
        } else {
            newCategary.push(option);
        }
        setCategory(newCategary);
    };

    useEffect(() => {
        if (category) {
            setSearchParams({ category: category });
        }
    }, [category, setSearchParams]);

    return (
        <>
            <Button
                ref={btnRef}
                variant="outline"
                alignItems="center"
                gap="3"
                colorScheme="black"
                borderRadius="none"
                fontWeight="normal"
                position="static"
                fontSize="16px"
                letterSpacing="0.5px"
                onClick={onOpen}
            >
                Filter & Sort
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Filter & Sort</DrawerHeader>

                    <DrawerBody>
                        <Box mt="5">
                            <Checkbox
                                checked={category.includes("HOODIE")}
                                value="HOODIE"
                                onChange={handleChange}
                            >
                                HOODIE
                            </Checkbox>
                        </Box>

                        <Box>
                            <Checkbox
                                checked={category.includes("JACKET")}
                                value="JACKET"
                                onChange={handleChange}
                            >
                                JACKET
                            </Checkbox>
                        </Box>

                        <Box>
                            <Checkbox
                                checked={category.includes("TOP")}
                                value="TOP"
                                onChange={handleChange}
                            >
                                TOP
                            </Checkbox>
                        </Box>

                        <Box>
                            <Checkbox
                                checked={category.includes("TEE")}
                                value="TEE"
                                onChange={handleChange}
                            >
                                TEE
                            </Checkbox>
                        </Box>

                        <Box>
                            <Checkbox
                                checked={category.includes("TIGHTS")}
                                value="TIGHTS"
                                onChange={handleChange}
                            >
                                TIGHTS
                            </Checkbox>
                        </Box>

                        <Box>
                            <Checkbox
                                checked={category.includes("LEGGINGS")}
                                value="LEGGINGS"
                                onChange={handleChange}
                            >
                                LEGGINGS
                            </Checkbox>
                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button
                            variant="outline"
                            borderRadius="none"
                            border="1px solid"
                            color="black"
                            fontWeight="normal"
                            mr={3}
                            onClick={onClose}
                        >
                            CANCEL
                        </Button>
                        <Button
                            bg="black"
                            color="#f2f2f2"
                            fontWeight="normal"
                            borderRadius="none"
                            _hover={{bg:"#424242"}}
                        >
                            APPLY
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
