import { prisma } from "@/lib/db";
import { Box, Heading } from "@chakra-ui/react";
import { DataTableHeaderProps } from "@saas-ui/react";
import DataTable from "./data-table";

const Customers = async () => {
  const COLUMNS = [
    {
      accessorKey: "name",
      header: "Customer",
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "location",
      header: "Location",
    },
    // {
    //   accessorKey: "createdAt",
    //   header: "Create Date",
    // },
  ];

  const customers = await prisma.customer.findMany();
  return (
    <Box overflowX={"auto"}>
      <Heading>
        <h1>Customers</h1>
      </Heading>
      <DataTable columns={COLUMNS} data={customers} />
    </Box>
  );
};

export default Customers;
