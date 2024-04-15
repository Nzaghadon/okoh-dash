export type ProductColumns = {
  name: string;
  price: number;
  categories: Category[];
  currentInventory?: number;
  brand?: string;
  createdAt: Date;
  action: Action;
};

export interface IProducts {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
  categories: number[] | undefined;
  currentInventory?: number;
  brand?: string;
  rating: number;
}

enum Status {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}

type Action = {
  view: IProducts;
  delete: () => number;
};

type Category = {
  id: number;
  name: string;
};
