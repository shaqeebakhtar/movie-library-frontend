"use client";
import { DataTable } from "@/app/movies/data-table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader } from "lucide-react";

const requestUrl = process.env.BACKEND_BASE_URL;

const Table = () => {
  const { data: moviesList, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      return await axios.get(`${requestUrl}/api/movies`);
    },
  });

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader className="animate-spin" />
        </div>
      ) : !isLoading && moviesList ? (
        <DataTable data={moviesList?.data} />
      ) : null}
    </>
  );
};

export default Table;
