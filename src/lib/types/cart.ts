export interface ICartProduct {
  name: string;
  image: string;
  price: number;
  brand: string;
  quantity: number;
  category: string[];
  rating: number;
  details?: string;
  registerDate?: string;
  inventory?: number;
  totalPrice: number;
}

export interface ICart {
  items: ICartProduct[];
  totalQuantity: number;
  totalPrice: number;
}

export interface ICartUi {
  cartBoxIsVisible: boolean
}