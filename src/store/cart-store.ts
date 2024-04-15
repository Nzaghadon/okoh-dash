import { IProducts } from "@/lib/types/product";
import { createHook, createStore } from "react-sweet-state";

const cartStore = createStore({
  initialState: {
    items: [] as IProducts[],
    totalQuantity: 0,
    totalPrice: 0,
    count: 0,
  },

  actions: {
    addToCart:
      (newItem: IProducts) =>
      ({ setState, getState }) => {
        const existingItem = getState().items.find(
          (item) => item.id === newItem.id
        );
        const updatedItems = existingItem
          ? [
              ...getState().items.filter((item) => item.id === newItem.id),
              {
                ...existingItem,
                qauntity: existingItem.quantity + newItem.quantity,
              },
            ]
          : [...getState().items, newItem];
        const newTotalPrice =
          getState().totalPrice + newItem.price * newItem.quantity;
        setState({
          items: updatedItems,
          totalQuantity: getState().totalQuantity + newItem.quantity,
          totalPrice: newTotalPrice,
        });
      },
    removeItem:
      (itemId: number) =>
      ({ setState, getState }) => {
        const { items } = getState();
        const itemToRemoveIndex = items.findIndex((item) => item.id === itemId);
        if (itemToRemoveIndex !== -1) {
          const updatedItems = [
            ...items.slice(0, itemToRemoveIndex),
            ...items.slice(itemToRemoveIndex + 1),
          ];
          const itemToRemove = items[itemToRemoveIndex];
          const newtotalPrice =
            getState().totalPrice - itemToRemove.price * itemToRemove.quantity;
          setState({
            items: updatedItems,
            totalQuantity: getState().totalQuantity - itemToRemove.quantity,
            totalPrice: newtotalPrice,
          });
        }
      },
    increment:
      (product: IProducts) =>
      ({ setState, getState }) => {
        const existingItem = getState().items.find(
          (item) => item.id === product.id
        );
        const updatedItems = existingItem
          ? [
              ...getState().items.filter((item) => item.id === product.id),
              { ...product, quantity: 1 },
            ]
          : [...getState().items, { ...product, quantity: 1 }];
        setState({ count: getState().count + 1, items: updatedItems });
      },
    decrement:
      (product: IProducts) =>
      ({ setState, getState }) => {
        const itemsInCart = getState().items.some(
          (item) => item.id === product.id
        );
        if (itemsInCart) {
          // Decrement the quantity in the cart if the product exists
          // (assuming your cart items have a "quantity" property)
          const existingItem = getState().items.find(
            (item) => item.id === product.id
          );
          const updatedItems = [
            ...getState().items.filter((item) => item.id !== product.id),
            {
              ...existingItem,
              quantity: Math.max(0, (existingItem as IProducts).quantity - 1),
            },
          ];
          // Update state with the updated items
          setState({ items: updatedItems as IProducts[] });
        }
        // Update the counter state regardless of cart presence
        setState({ count: Math.max(0, getState().count - 1) });
      },
  },
  name: "cart",
});

export const useCart = createHook(cartStore);
