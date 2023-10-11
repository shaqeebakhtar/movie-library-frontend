import AddMovie from "@/components/add-movie";

const Page = () => {
  return (
    <div className="container py-8">
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
    </div>
  );
};

export default Page;
