import * as React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  Table as TableInstance,
  flexRender,
  ColumnDef,
  ColumnSort,
  TableOptions,
  Header,
  Cell,
  getPaginationRowModel,
  PaginationState,
} from "@tanstack/react-table";
import {
  chakra,
  forwardRef,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  ThemingProps,
  Tfoot,
  Button,
  CheckboxProps,
  Stack,
  Spacer,
} from "@chakra-ui/react";

import { cx } from "@chakra-ui/utils";

import { ChevronDownIcon, ChevronUpIcon, Link } from "@saas-ui/core";

export type { TableInstance, ColumnDef };

export interface MyTableProps<Data extends object>
  extends Omit<TableOptions<Data>, "getCoreRowModel">,
    ThemingProps<"Table"> {
  /**
   * The TableInstance reference
   */
  instanceRef?: React.Ref<TableInstance<Data>>;
  /**
   * Enable sorting on all columns
   */
  isSortable?: boolean;
  /**
   * Enable row selection
   */
  isSelectable?: boolean;
  /**
   * Triggers whenever the row selection changes.
   * @params rows The selected row id's
   */
  onSelectedRowsChange?: (rows: Array<string>) => void;
  /**
   * Triggers when sort changed.
   * Use incombination with `manualSortBy` to enable remote sorting.
   */
  onSortChange?: (columns: ColumnSort[]) => void;
  /**
   * The table class name attribute
   */
  className?: string;
}

export const MyTable = React.forwardRef(
  <Data extends object>(
    props: MyTableProps<Data>,
    ref: React.ForwardedRef<HTMLTableElement>
  ) => {
    const {
      instanceRef,
      columns,
      isSortable,
      isSelectable,
      onSelectedRowsChange,
      onSortChange,
      colorScheme,
      size,
      variant,
      className,
      ...rest
    } = props;

    const instance = useReactTable<Data>({
      columns: React.useMemo(() => {
        return getSelectionColumn<Data>(isSelectable).concat(
          columns?.map((column: any) => {
            if (!column.accessorKey) {
              column.accessorKey = column.accessor || column.id;
            }
            if (!column.header && column.Header) {
              column.header = column.Header;
            }
            if (!column.cell && column.Cell) {
              column.cell = column.Cell;
            } else if (!column.cell) {
              column.cell = MyTableCell;
            }
            return column;
          })
        );
      }, [columns, isSelectable]),
      enableRowSelection: isSelectable,
      getSortedRowModel: isSortable ? getSortedRowModel() : undefined,
      ...rest,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });

    // This exposes the useTable api through the instanceRef
    React.useImperativeHandle(instanceRef, () => instance, [instance]);

    const state = instance.getState();

    React.useEffect(() => {
      onSelectedRowsChange?.(Object.keys(state.rowSelection));
    }, [onSelectedRowsChange, state.rowSelection, instance]);

    React.useEffect(() => {
      onSortChange?.(state.sorting);
    }, [onSortChange, state.sorting]);

    return (
      <Table
        ref={ref}
        sx={{ "tr:last-child td": { border: 0 } }}
        className={cx("sui-data-table", className)}
        colorScheme={colorScheme}
        size={size}
        variant={variant}
      >
        <Thead>
          {instance.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <MyTableHeader
                  key={header.id}
                  header={header}
                  isSortable={isSortable}
                />
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {instance.getRowModel().rows.map((row) => {
            return (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const meta = (cell.column.columnDef.meta || {}) as any;
                  return (
                    <Td
                      key={cell.id}
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                      isNumeric={meta.isNumeric}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Td colSpan={columns.length}>
              <Stack display={"flex"} direction={"row"}>
                <Button
                  onClick={() => instance.previousPage()}
                  disabled={!instance.getCanPreviousPage()}
                  colorScheme={"teal"}
                >
                  {" "}
                  {"<"}{" "}
                </Button>
                <Spacer />
                <Button
                  onClick={() => instance.nextPage()}
                  disabled={!instance.getCanNextPage()}
                  colorScheme={"teal"}
                >
                  {" "}
                  {">"}{" "}
                </Button>
              </Stack>
            </Td>
          </Tr>
        </Tfoot>
      </Table>
    );
  }
) as (<Data extends object>(
  props: MyTableProps<Data> & {
    ref?: React.ForwardedRef<HTMLTableElement>;
  }
) => React.ReactElement) & { displayName?: string };

MyTable.displayName = "MyTable";

export interface MyTableSortProps<Data extends object, TValue> {
  header: Header<Data, TValue>;
}
export const MyTableSort = <Data extends object, TValue>(
  props: MyTableSortProps<Data, TValue>
) => {
  const { header, ...rest } = props;

  const sorterStyles = {
    ms: 2,
  };

  if (header.id === "selection") {
    return null;
  }

  const sorted = header.column.getIsSorted();

  return (
    <chakra.span __css={sorterStyles} {...rest}>
      {sorted ? (
        sorted === "desc" ? (
          <ChevronDownIcon aria-label="sorted descending" />
        ) : (
          <ChevronUpIcon aria-label="sorted ascending" />
        )
      ) : (
        ""
      )}
    </chakra.span>
  );
};

MyTableSort.displayName = "MyTableSort";

export interface MyTableHeaderProps<Data extends object, TValue> {
  header: Header<Data, TValue>;
  isSortable?: boolean;
}
export const MyTableHeader = <Data extends object, TValue>(
  props: MyTableHeaderProps<Data, TValue>
) => {
  const { header, isSortable, ...rest } = props;

  let headerProps = {};

  const enabled = !header.column.getCanSort() ? false : isSortable;

  if (enabled) {
    headerProps = {
      className: "saas-data-table__sortable",
      userSelect: "none",
      cursor: "pointer",
      onClick: header.column.getToggleSortingHandler(),
    };
  }

  const meta = (header.column.columnDef.meta || {}) as any;
  const size = header.column.columnDef.size;
  return (
    <Th
      colSpan={header.colSpan}
      textTransform="none"
      width={size && `${size}px`}
      isNumeric={meta.isNumeric}
      {...headerProps}
      {...rest}
    >
      {flexRender(header.column.columnDef.header, header.getContext())}
      {enabled && <MyTableSort header={header} />}
    </Th>
  );
};

MyTableHeader.displayName = "MyTableHeader";

const getResult = <Data extends object>(
  fn: (row: Data) => string,
  params: Data
): string => {
  if (typeof fn === "function") {
    return fn(params);
  }
  return fn;
};

export const MyTableCell = <Data extends object, TValue>(
  props: Cell<Data, TValue>
) => {
  const { column, row, getValue } = props;

  const meta = (column.columnDef.meta || {}) as any;

  if (meta.href) {
    const href = getResult(meta.href, row.original);
    return <Link href={href}>{getValue<string>()}</Link>;
  }
  return getValue() || null;
};

MyTableCell.displayName = "MyTableCell";

const MyTableCheckbox = forwardRef((props, ref) => {
  return (
    <chakra.div>
      <Checkbox ref={ref} {...props} />
    </chakra.div>
  );
});

MyTableCheckbox.displayName = "MyTableCheckbox";

const getSelectionColumn = <Data extends object>(enabled?: boolean) => {
  return enabled
    ? [
        {
          id: "selection",
          size: 1,
          header: ({ table }) => (
            <MyTableCheckbox
              isChecked={table.getIsAllRowsSelected()}
              isIndeterminate={table.getIsSomeRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
              aria-label={
                table.getIsAllRowsSelected()
                  ? "Deselect all rows"
                  : "Select all rows"
              }
            />
          ),
          cell: ({ row }) => (
            <MyTableCheckbox
              isChecked={row.getIsSelected()}
              isIndeterminate={row.getIsSomeSelected()}
              onChange={row.getToggleSelectedHandler()}
              aria-label={row.getIsSelected() ? "Deselect row" : "Select row"}
            />
          ),
        } as ColumnDef<Data>,
      ]
    : [];
};
