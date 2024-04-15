import { ICartUi } from "@/lib/types/cart";
import { createHook, createStore } from "react-sweet-state";

const initialState: ICartUi = {
  cartBoxIsVisible: false,
};

const cartUiStore = createStore({
  initialState: initialState,

  actions: {
    toggleCartBox:
      () =>
      ({ setState, getState }) => {
        setState({ cartBoxIsVisible: !getState().cartBoxIsVisible });
      },
  },
  name: "cartUi",
});

export const useCartUi = createHook(cartUiStore);
