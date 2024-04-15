import { Box, Heading, IconButton, Stack } from "@chakra-ui/react";
import { ProductTable } from "./data-table";
import { prisma } from "@/lib/db";

import { ProductColumns } from "@/lib/types/product";
import { createColumnHelper } from "@tanstack/react-table";
import { nairaCurrencyFormatter } from "@/lib/utils";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
import { COLUMNS } from "./columns";

const Products = async () => {
  // const columnHelper = createColumnHelper<ProductColumns>();

  // const columns = [
  //   columnHelper.accessor("name", {
  //     header: "Product",
  //   }),
  //   columnHelper.accessor("categories", {
  //     header: "Category",
  //     cell: (props) => {
  //       const categories = props.getValue();
  //       if (!categories || categories.length === 0) return "";

  //       return categories.map((category) => category.name).join(", ");
  //     },
  //   }),
  //   columnHelper.accessor("price", {
  //     header: "Price(₦)",
  //     cell: (price) => nairaCurrencyFormatter(price.getValue()),
  //   }),
  //   columnHelper.accessor("currentInventory", {
  //     header: "Inventory",
  //     cell: (inventory) => inventory.getValue(),
  //   }),
  //   columnHelper.accessor("brand", {
  //     header: "Brand",
  //     cell: (brand) => brand.getValue(),
  //   }),
  //   columnHelper.accessor("createdAt", {
  //     header: "Added Date",
  //     cell: (date) => new Date(date.getValue()).toLocaleDateString(),
  //   }),
  //   columnHelper.accessor("action", {
  //     header: "Action",
  //     cell: (action) => {
  //       <Stack direction={"row"}>
  //         <Link href={"#"}>
  //           <IconButton icon={<AiOutlineEye />} aria-label="View" />
  //         </Link>
  //         <IconButton
  //           icon={<AiOutlineDelete />}
  //           aria-label="Delete"
  //           onClick={() => handleDelete(action.getValue().delete())}
  //         />
  //       </Stack>;
  //     },
  //   }),
  // ];

  const products = await prisma.product.findMany({
    include: {
      categories: true,
    },
  });

  return (
    <Box overflowX={"auto"}>
      <Heading as={"h2"} size={"2xl"} noOfLines={1}>
        Products
      </Heading>
      <ProductTable columns={COLUMNS} data={products} />
    </Box>
  );
};

export const handleDelete = async (productId: number) => {
  if (confirm("Are you sure you want to delete this product?")) {
    console.log(`Deleting product with ID: ${productId}`);
    return await prisma.product.delete({ where: { id: productId } });
  }
};

export default Products;
