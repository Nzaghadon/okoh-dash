"use client";

import { IProducts } from "@/lib/types/product";
import { nairaCurrencyFormatter } from "@/lib/utils";
import { useCart } from "@/store/cart-store";
import { Box, Input, Stack, Text, useCounter } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type props = {
  product: IProducts;
};

export const CartItem: React.FC<props> = ({ product }) => {
  const [state, actions] = useCart();

  const productQuantity = state.items.find(
    (item) => item.quantity === product.quantity
  )?.quantity;

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (+event.currentTarget.value >= 1 && +event.currentTarget.value <= 10) {
      state.count = +event.currentTarget.value;
    }
  };

  const cartTotalAmount = state.totalPrice;

  const priceInNaira = nairaCurrencyFormatter(cartTotalAmount);

  return (
    <Stack>
      <Box>
        <Link href={"#"}>
          <>
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              objectFit={"contain"}
            />
          </>
          <>{product.name}</>
        </Link>
      </Box>
      <Box>
        <Box>
          <Box>
            <Box onClick={() => actions.increment(product)}>
              <AiOutlinePlus fontSize={"1rem"} />
            </Box>
            <Input
              type={"number"}
              min={1}
              max={10}
              value={state.count}
              onChange={changeHandler}
            />
            {state.count === 1 ? (
              <Box onClick={() => actions.decrement(product)}>
                <AiOutlineDelete style={{ fontSize: "1rem", color: "red" }} />
              </Box>
            ) : (
              <Box onClick={() => actions.decrement(product)}>
                <AiOutlineMinus style={{ fontSize: "1rem" }} />
              </Box>
            )}
          </Box>
          <Box>
            <Text>Total Amount</Text>
            <Text>{priceInNaira}</Text>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
