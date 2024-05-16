"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRouter } from "next/navigation";

const data: Payment[] = [
  {
    id: "5kma53ae",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "bhqecj4p",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "5kma53ae",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "bhqecj4p",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "5kma53ae",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "bhqecj4p",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "5kma53ae",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "bhqecj4p",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "5kma53ae",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "bhqecj4p",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "5kma53ae",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "bhqecj4p",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "5kma53ae",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "bhqecj4p",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "5kma53ae",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "bhqecj4p",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "5kma53ae",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "bhqecj4p",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "5kma53ae",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "bhqecj4p",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "5kma53ae",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "bhqecj4p",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "5kma53ae",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
  {
    id: "bhqecj4p",
    avatar: "721",
    email: "carmella@hotmail.com",
    first_name: "carmella",
    last_name: "hotmail.com",
  },
];

export type Payment = {
  id: string;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "first_name",
    header: () => <div className="text-right">First Name</div>,
  },
  {
    accessorKey: "last_name",
    header: () => <div className="text-right">Last Name</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>

            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem>Assign Subject</DropdownMenuItem>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTableDemo() {
  const router = useRouter();

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => router.push(`/parents/${row.id}`)}
                  className="cursor-pointer"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
