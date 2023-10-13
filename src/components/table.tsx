"use client";
import { DataTable, Movie } from "@/app/movies/data-table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader } from "lucide-react";
import { useState } from "react";

const requestUrl = process.env.BACKEND_BASE_URL;

const Table = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currPage, setCurrPage] = useState<number>(0);

  const { data: moviesList, isLoading } = useQuery({
    queryKey: ["movies", currPage],
    queryFn: async () => {
      return await axios.get(`${requestUrl}/api/movies/?page=${currPage}`);
    },
  });

  let filteredMovies, totalPages;
  if (!isLoading && moviesList && moviesList.data.count) {
    filteredMovies = moviesList.data.moviesList.filter((movie: Movie) =>
      movie.movieName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    totalPages = Math.floor(moviesList.data.count / 10);
    console.log(totalPages);
  }

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader className="animate-spin" />
        </div>
      ) : !isLoading && moviesList ? (
        <DataTable
          data={searchTerm ? filteredMovies : moviesList?.data.moviesList}
          totalPages={totalPages!}
          setCurrPage={setCurrPage}
          currPage={currPage}
          onSearch={setSearchTerm}
        />
      ) : null}
    </>
  );
};

export default Table;
