"use client";
import { DataTable, Movie } from "@/app/movies/data-table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader } from "lucide-react";
import { useState } from "react";

const requestUrl = process.env.BACKEND_BASE_URL;

const Table = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data: moviesList, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      return await axios.get(`${requestUrl}/api/movies`);
    },
  });

  let filteredMovies;
  if (!isLoading && moviesList) {
    filteredMovies = moviesList.data.filter((movie: Movie) =>
      movie.movieName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader className="animate-spin" />
        </div>
      ) : !isLoading && moviesList ? (
        <DataTable
          data={searchTerm ? filteredMovies : moviesList?.data}
          onSearch={setSearchTerm}
        />
      ) : null}
    </>
  );
};

export default Table;
