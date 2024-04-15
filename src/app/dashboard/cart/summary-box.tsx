"use client";

import { useCart } from "@/store/cart-store";
import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export const SummaryBox = () => {
  const [state] = useCart();

  const totalQuantity = state.totalQuantity;

  const totalAmount = state.totalPrice;

  return (
    <Box>
      {totalQuantity > 0 ? (
        <Box>
          <Heading as={"h2"}>Order Summary</Heading>
          <Box>
            <Box>
              <Text>Total Quantity</Text>
              <Text>{totalQuantity}</Text>
            </Box>
            <Box>
              <Text>Total Amount</Text>
              <Text>{totalAmount}</Text>
            </Box>
          </Box>
          <Link href={"#"}>Order</Link>
        </Box>
      ) : (
        <Text>Cart Is Empty</Text>
      )}
    </Box>
  );
};
