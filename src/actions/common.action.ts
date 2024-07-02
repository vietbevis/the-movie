"use server";

import { handleMovieDetail, handleMovies } from "@/apiRequest";
import { MovieListResponseType } from "@/types";

export type PropsMoviesAction = {
  year?: string;
  type?: "series" | "single" | "hoathinh";
  status?: "ongoing" | "trailer" | "completed";
  country?: string;
  category?: string;
  page: number;
  limit: number;
};

export const handleMoviesAction = async ({
  year,
  type,
  status,
  country,
  category,
  page,
  limit,
}: PropsMoviesAction): Promise<MovieListResponseType> => {
  return await handleMovies({
    year,
    type,
    status,
    country,
    category,
    page,
    limit,
  });
};

export const handleMovieDetailAction = async (slug: string) => {
  return await handleMovieDetail(slug);
};
