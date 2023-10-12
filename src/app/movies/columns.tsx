"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Movie = {
  id: string;
  movieName: string;
  duration: Number;
  durationFormat: "minutes" | "hours";
  ratings: number;
};

export const columns: ColumnDef<Movie>[] = [
  {
    accessorKey: "movieName",
    header: "Movie Name",
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "ratings",
    header: "Ratings",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      console.log(row.original.id);

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="focus:bg-red-100">
              <Trash2 className="mr-2 h-4 w-4 text-red-600" />
              <span className="text-red-600">Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
