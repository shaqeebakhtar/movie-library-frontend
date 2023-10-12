"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddMovieForm from "./add-movie-form";

const AddMovie = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  return (
    <Dialog open={isPopupOpen}>
      <DialogTrigger asChild>
        <Button
          className="font-semibold space-x-2"
          onClick={() => setIsPopupOpen((prev) => !prev)}
        >
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          <span>Add Movie</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Movie</DialogTitle>
          <DialogDescription>
            Add a movie of your choice in the list.
          </DialogDescription>
        </DialogHeader>
        <AddMovieForm closePopup={setIsPopupOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default AddMovie;
