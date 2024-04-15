import { Box, Stack } from "@chakra-ui/react";
import { CartList } from "./cart-list";
import { SummaryBox } from "./summary-box";

const Cart = () => {
  return (
    <Box>
      <Stack>
        <CartList />
        <SummaryBox />
      </Stack>
    </Box>
  );
};

export default Cart;
