"use client";

import { useCart } from "@/store/cart-store";
import { Box } from "@chakra-ui/react";
import { CartItem } from "./cart-item";

export const CartList = () => {
  const [state] = useCart();

  const cartItems = state.items;

  return (
    <Box>
      {cartItems.length
        ? cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} product={cartItem} />;
          })
        : null}
    </Box>
  );
};
