"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { DialogFooter } from "./ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { addMovieSchema } from "@/schemas/add-movie-schema";

const AddMovieForm = () => {
  const form = useForm<z.infer<typeof addMovieSchema>>({
    resolver: zodResolver(addMovieSchema),
    defaultValues: {
      durationFormat: "minutes",
    },
  });

  function onSubmit(values: z.infer<typeof addMovieSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="movieName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Movie Name</FormLabel>
                <FormControl>
                  <Input placeholder="Batman" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={
                      form.getValues("durationFormat") === "minutes"
                        ? "120"
                        : "2.5"
                    }
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="durationFormat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration Format</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minutes">Minutes</SelectItem>
                      <SelectItem value="hours">Hours</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ratings"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ratings</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="1 - 10"
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <DialogFooter>
          <Button type="submit">Save Movie</Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default AddMovieForm;
