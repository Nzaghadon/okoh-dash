"use client";

import { TagInput } from "@/components/input";
import {
  Box,
  Button,
  Card,
  Flex,
  FormControl,
  FormHelperText,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spacer,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const CustomEditor = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

export const AddProductForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    brand: "",
    description: "",
    image: "",
    currentInventory: "",
    categories: "",
    rating: "",
    price: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setFormValues({
      id: "",
      name: "",
      brand: "",
      description: "",
      image: "",
      currentInventory: "",
      categories: "",
      rating: "",
      price: "",
    });

    try {
      const res = await fetch("api/add_product", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const {
    id,
    name,
    brand,
    description,
    currentInventory,
    image,
    categories,
    rating,
    price,
  } = formValues;

  return (
    <FormControl onSubmit={handleSubmit}>
      <Flex w={"full"} px={0}>
        <Box mr={8}>
          <Grid as={Card} p={4} my={8} boxShadow={"md"}>
            <GridItem my={4}>
              <Stack>
                <Text fontSize={"medium"}>Product Title</Text>
                <Input
                  placeholder="Enter product title"
                  px={8}
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <Text fontSize={"medium"}>Product Description</Text>
                <CustomEditor
                  initialData={""}
                  name="description"
                  value={description}
                  onChange={handleChange}
                />
              </Stack>
            </GridItem>
          </Grid>
          <Stack as={Card} p={4} boxShadow={"md"}>
            <Text fontSize={"large"} my={2}>
              Product Gallary
            </Text>

            <Box>
              <Stack>
                <Text my={2}>Product Image</Text>
                <FormHelperText> Add product main image</FormHelperText>

                <Input
                  type={"file"}
                  name="image"
                  value={image}
                  onChange={handleChange}
                />
              </Stack>
            </Box>
            <Box>
              <Stack>
                <Text my={2}>Product Gallary</Text>
                <FormHelperText>Add product gallary images</FormHelperText>

                <Box>
                  <Input
                    id="fileUpload"
                    type={"file"}
                    height={"10em"}
                    border={"2px dashed grey"}
                    multiple
                    accept={".jpeg, .jpg, .png"}
                    onChange={handleChange}
                  />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Spacer />
        <Box my={4}>
          <Box as={Card} p={4} my={4} boxShadow={"md"}>
            <Stack spacing={4}>
              <Stack direction={"row"}>
                <Switch />
                <Text>In Stock</Text>
              </Stack>
              <Stack>
                <Text>Product Code</Text>
                <Input
                  type="text"
                  name="id"
                  value={id}
                  onChange={handleChange}
                />
              </Stack>
              <Stack>
                <Text>
                  <Text>Product SKU</Text>
                </Text>
                <Input
                  type={"number"}
                  name="currentInventory"
                  value={currentInventory}
                  onChange={handleChange}
                />
              </Stack>
              <Stack>
                <Text>Product Brand</Text>
                <Input
                  type={"text"}
                  name="brand"
                  value={brand}
                  onChange={handleChange}
                />
                <FormHelperText m={0} p={0}>
                  Please input product brand
                </FormHelperText>
              </Stack>
              <Stack>
                <Flex justifyContent={"space-between"} m={0} p={0}>
                  <Text p={0} m={0}>
                    Category
                  </Text>
                  <button id="addNew">Add New</button>
                </Flex>
                <Select name="categories" value={categories}>
                  <option value={"Beds"}>Beds</option>
                  <option value={"Chairs"}>Chairs</option>
                  <option value={"Couch"}>Couch</option>
                  <option value={"Tables"}>Tables</option>
                  <option value={"Wardrobes"}>Wardrobes</option>
                </Select>
              </Stack>
              <Stack>
                <Text pb={0} mb={0}>
                  Tags
                </Text>
                <TagInput />
              </Stack>
            </Stack>
          </Box>
          <Box as={Card} p={4} my={4} boxShadow={"md"}>
            <Stack spacing={4}>
              <Stack>
                <Text>Status</Text>
                <Select>
                  <option>Published</option>
                  <option>Unpublished</option>
                  <option>Draft</option>
                </Select>
              </Stack>
              <Stack>
                <Text>Schedule</Text>
                <Input
                  type={"datetime-local"}
                  placeholder="Select Date"
                  onChange={handleChange}
                />
              </Stack>
            </Stack>
          </Box>
          <Box as={Card} p={4} my={4} boxShadow={"md"}>
            <Box>
              <Stack spacing={4}>
                <Stack>
                  <Text>Regular Price</Text>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      &#8358;
                    </InputLeftElement>
                    <Input placeholder="Enter amount" px={20} type={"number"} />
                  </InputGroup>
                </Stack>
                <Stack>
                  <Text>Sale Price</Text>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      &#8358;
                    </InputLeftElement>
                    <Input
                      type={"number"}
                      placeholder="Enter amount"
                      px={20}
                      name="price"
                      value={price}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Stack>
                <Stack direction={"row"} py={2}>
                  <Switch />
                  <Text>Price includes taxes</Text>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Button
            type={"submit"}
            colorScheme={"purple"}
            w={"full"}
            py={5}
            fontSize={"15px"}
            onSubmit={handleSubmit}
          >
            {loading ? "...loading" : "Create Product"}
          </Button>
        </Box>
      </Flex>
    </FormControl>
  );
};
