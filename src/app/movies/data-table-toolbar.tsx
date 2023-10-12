"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDownToLine } from "lucide-react";
import * as XLSX from "xlsx";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Movie } from "./data-table";

export const DataTableToolbar = ({ data }: { data: Movie[] }) => {
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "movie-list.xlsx");
  };

  const downloadText = () => {
    var a = document.createElement("a");
    var file = new Blob([JSON.stringify(data)], { type: "text/plain" });
    a.href = URL.createObjectURL(file);
    a.download = "movie-list.txt";
    a.click();
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search movies..."
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline">
            <ArrowDownToLine className="mr-2 h-4 w-4" />
            <span>Download List</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={downloadExcel}>
            Download as CSV
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={downloadText}>
            Download as TXT
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
