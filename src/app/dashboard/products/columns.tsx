"use client";

import { ProductColumns } from "@/lib/types/product";
import { nairaCurrencyFormatter } from "@/lib/utils";
import { Stack, IconButton } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { handleDelete } from "./page";
import ProductDetails from "../product-details/page";

const columnHelper = createColumnHelper<ProductColumns>();

export const COLUMNS = [
  columnHelper.accessor("name", {
    header: "Product",
    cell: (product) => product.getValue(),
  }),
  columnHelper.accessor("categories", {
    header: "Category",
    cell: (props) => {
      const categories = props.getValue();
      if (!categories || categories.length === 0) return "";

      return categories.map((category) => category.name).join(", ");
    },
  }),
  columnHelper.accessor("price", {
    header: "Price(₦)",
    cell: (price) => nairaCurrencyFormatter(price.getValue()),
  }),
  columnHelper.accessor("currentInventory", {
    header: "Inventory",
    cell: (inventory) => inventory.getValue(),
  }),
  columnHelper.accessor("brand", {
    header: "Brand",
    cell: (brand) => brand.getValue(),
  }),
  columnHelper.accessor("createdAt", {
    header: "Added Date",
    cell: (date) => new Date(date.getValue()).toLocaleDateString(),
  }),
  columnHelper.accessor("action", {
    header: "Action",
    cell: (action) => {
      <Stack direction={"row"}>
        <IconButton icon={<AiOutlineEye />} aria-label="View">
          <ProductDetails product={action.getValue().view} />
        </IconButton>
        <IconButton
          icon={<AiOutlineDelete />}
          aria-label="Delete"
          onClick={() => handleDelete(action.getValue().delete())}
        />
      </Stack>;
    },
  }),
];
