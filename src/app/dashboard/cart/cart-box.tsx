"use client";

import { nairaCurrencyFormatter } from "@/lib/utils";
import { useCart } from "@/store/cart-store";
import { useCartUi } from "@/store/cartui-store";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export const CartBox = () => {
  const [state] = useCart();
  const [action] = useCartUi();

  const cartItemQuantity = state.totalQuantity;

  const cartTotalAmount = state.totalPrice;

  const cartItems = state.items;

  const priceInNaira = nairaCurrencyFormatter(cartTotalAmount);

  return (
    <Box as={Card}>
      <CardHeader>
        <Stack>
          <span>{cartItemQuantity} Products</span>
          <span>
            <Link href={"/cart"}>See Cart</Link>
          </span>
        </Stack>
      </CardHeader>
      <Divider />
      <CardBody>
        <Stack>
          {cartItems.length ? (
            <Box>
              <Box>
                <Text>Payable Amount</Text>
                <Text>{priceInNaira}</Text>
              </Box>
              <Text>Order</Text>
            </Box>
          ) : null}
        </Stack>
      </CardBody>
    </Box>
  );
};
