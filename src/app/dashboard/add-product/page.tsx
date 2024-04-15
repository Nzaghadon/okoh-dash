import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { AddProductForm } from "./form";

const AddProduct = () => {
  return (
    <Box>
      <Heading as={"h1"} size={"3xl"} noOfLines={1}>
        Add Product
      </Heading>
      <AddProductForm />
    </Box>
  );
};

export default AddProduct;
