"use client";

import { useCart } from "@/store/cart-store";
import { useCartUi } from "@/store/cartui-store";
import { Box, ScaleFade, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { CartBox } from "./cart-box";

export const Basket = () => {
  const [state, actions] = useCartUi();
  const { isOpen, onToggle } = useDisclosure();

  const showCartBox = state.cartBoxIsVisible;

  const cartItemQuantity = useCart()[0].totalQuantity;

  const handleMouseEvent = () => {
    actions.toggleCartBox();
  };

  return (
    <Box>
      <Link href={"/cart"}>
        <span>{cartItemQuantity}</span>
      </Link>
      <ScaleFade in={isOpen} onMouseMove={onToggle}>
        <Box>
          <CartBox />
        </Box>
      </ScaleFade>
    </Box>
  );
};
