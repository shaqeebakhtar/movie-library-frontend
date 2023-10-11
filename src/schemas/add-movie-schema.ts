import z from "zod";

const base = z.object({
  movieName: z
    .string()
    .min(2, {
      message: "Movie Name must be at least 2 characters.",
    })
    .max(100, { message: "Movie Name must be maximum of 100 characters." }),
  ratings: z
    .number({ required_error: "Duration is required" })
    .min(0, {
      message: "Ratings must be at least 0.",
    })
    .max(10, {
      message: "Ratings can't be greater than 10.",
    }),
});

export const addMovieSchema = z.discriminatedUnion("durationFormat", [
  z
    .object({
      duration: z
        .number({ required_error: "Duration is required" })
        .min(1, { message: "Duration can't be less than 1" })
        .max(720, { message: "Duration can't be greater than 720" }),
      durationFormat: z.literal("minutes"),
    })
    .merge(base),
  z
    .object({
      duration: z
        .number({ required_error: "Duration is required" })
        .min(0.1, { message: "Duration can't be less than 0.1" })
        .max(12, { message: "Duration can't be greater than 12" }),
      durationFormat: z.literal("hours"),
    })
    .merge(base),
]);
