import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="container flex flex-col items-center justify-center h-screen space-y-4">
      <p className="text-xl">Hi 👋, welcome to our movie library.</p>
      <Link href="/movies" className={buttonVariants()}>
        View Library
      </Link>
    </div>
  );
};

export default Home;
