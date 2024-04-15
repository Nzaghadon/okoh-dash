"use client";

import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import { DataTable as DataTableRoot, SearchInput } from "@saas-ui/react";
import {
  getFilteredRowModel,
  getPaginationRowModel,
  PaginationState,
} from "@tanstack/react-table";
import React, { useState } from "react";

const DataTable = ({ columns, data }: any) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  return (
    <Card>
      <CardHeader>
        <SearchInput
          width={"25%"}
          placeholder={"Search"}
          value={globalFilter}
          onChange={(e: any) => setGlobalFilter(e.target.value)}
          onReset={() => setGlobalFilter("")}
        />
      </CardHeader>
      <CardBody overflowX={"auto"} px={0}>
        <DataTableRoot
          columns={columns}
          data={data}
          getFilteredRowModel={getFilteredRowModel()}
          getPaginationRowModel={getPaginationRowModel()}
          state={{ globalFilter, pagination }}
          onGlobalFilterChange={setGlobalFilter}
          onPaginationChange={setPagination}
          isSelectable
        />
      </CardBody>
    </Card>
  );
};

export default DataTable;
