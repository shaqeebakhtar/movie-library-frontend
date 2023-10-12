"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { DataTableToolbar } from "./data-table-toolbar";
import { Dispatch, SetStateAction } from "react";

export type Movie = {
  id: string;
  movieName: string;
  duration: Number;
  durationFormat: "minutes" | "hours";
  ratings: number;
};

const requestUrl = process.env.BACKEND_BASE_URL;

export const DataTable = ({
  data,
  onSearch,
}: {
  data: Movie[];
  onSearch: Dispatch<SetStateAction<string>>;
}) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`${requestUrl}/api/movies/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });

  return (
    <div className="space-y-4">
      <DataTableToolbar data={data} onSearch={onSearch} />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Sl No.</TableHead>
              <TableHead>Movie Name</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Ratings</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="font-medium">{row.movieName}</TableCell>
                  <TableCell>{+row.duration} Hrs</TableCell>
                  <TableCell>{+row.ratings}</TableCell>
                  <TableCell className="w-[100px]">
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
                        <DropdownMenuItem
                          className="focus:bg-red-100"
                          onSelect={() => mutate(row.id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4 text-red-600" />
                          <span className="text-red-600">Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <div className="flex items-center justify-center h-24 text-center">
                No Results
              </div>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
};
