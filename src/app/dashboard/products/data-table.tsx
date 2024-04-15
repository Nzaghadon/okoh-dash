"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { MyTable } from "./tanstack_table";
import { DataTable } from "@saas-ui/react";
import { getPaginationRowModel, PaginationState } from "@tanstack/react-table";
import React from "react";

export const ProductTable = ({ columns, data }: any) => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  return (
    <Card overflowX={"auto"}>
      <CardHeader>
        <Stack direction={"row"} display={"flex"}>
          <Stack>
            <Button
              colorScheme="teal"
              leftIcon={<BiPlus size={20} />}
              fontSize={"14px"}
              py={5}
              px={5}
            >
              Add Product
            </Button>
          </Stack>
          <Spacer />
          <Stack spacing={2} direction={"row"}>
            <Button variant={"outline"} fontSize={"14px"} py={5} px={5}>
              Import
            </Button>
            <Button variant={"outline"} fontSize={"14px"} py={5} px={5}>
              Export
            </Button>
          </Stack>
        </Stack>
      </CardHeader>
      <Divider my={4} border={"-1px solid"} />
      <CardBody overflowX={"auto"} px={0}>
        <MyTable
          columns={columns}
          data={data}
          getPaginationRowModel={getPaginationRowModel()}
          onPaginationChange={setPagination}
          state={{ pagination }}
        />
      </CardBody>
    </Card>
  );
};
