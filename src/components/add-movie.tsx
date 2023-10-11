import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import AddMovieForm from "./add-movie-form";

const AddMovie = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-semibold space-x-2">
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
        <AddMovieForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddMovie;
