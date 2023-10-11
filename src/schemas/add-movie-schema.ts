import z from "zod";

export const addMovieSchema = z.object({
  movieName: z
    .string()
    .min(2, {
      message: "Movie Name must be at least 2 characters.",
    })
    .max(100, { message: "Movie Name must be maximum of 100 characters." }),
  duration: z.number({ required_error: "Duration is required" }),
  durationFormat: z.enum(["minutes", "hours"]),
  ratings: z
    .number({ required_error: "Duration is required" })
    .min(0, {
      message: "Ratings must be at least 0.",
    })
    .max(10, {
      message: "Ratings can't be greater than 10.",
    }),
});
