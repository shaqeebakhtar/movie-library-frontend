import AddMovie from "@/components/add-movie";
import { DataTable } from "./data-table";
import { Movie, columns } from "./columns";

export const data: Movie[] = [
  {
    id: "1",
    movieName: "movie1",
    duration: 120,
    durationFormat: "minutes",
    ratings: 5,
  },
  {
    id: "1",
    movieName: "movie2",
    duration: 120,
    durationFormat: "minutes",
    ratings: 5,
  },
];

const Page = () => {
  return (
    <div className="container py-8 flex flex-col space-y-16">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of movies specially added for you.
          </p>
        </div>
        <div>
          <AddMovie />
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Page;
