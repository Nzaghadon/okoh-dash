import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Dashboard from "./dashboard/page";
import AddProduct from "./add-product/page";
import Customers from "./customers/page";
import { Products } from "./products/page";
import { ProductDetails } from "./product-details/page";
import { prisma } from "@/lib/db";

const product = prisma.product.findMany();

const Home = () => {
  return (
    <Box overflowX={"auto"}>
      <Dashboard />
    </Box>
  );
};

export default Home;
