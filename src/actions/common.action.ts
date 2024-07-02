"use server";

import { handleMovieDetail, handleMovies } from "@/apiRequest";
import { MovieListResponseType } from "@/types";
import { redirect } from "next/navigation";

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

export const handleFilterChange = async (e: any, path: string) => {
  let query: { [key: string]: string } = {};
  for (const items of e) {
    if (items[1] !== "null" && items[1] !== "") {
      query[items[0]] = items[1];
    }
  }
  if (Object.keys(query).length === 0) {
    redirect(path);
  }
  const yearQuery =
    e.get("year") !== "null" && e.get("year") !== null
      ? `&year=${e.get("year")}`
      : "";
  const typeQuery =
    e.get("type") !== "null" && e.get("type") !== null
      ? `&type=${e.get("type")}`
      : "";
  const statusQuery =
    e.get("status") !== "null" && e.get("status") !== null
      ? `&status=${e.get("status")}`
      : "";
  const countryQuery =
    e.get("country") !== "null" && e.get("country") !== null
      ? `&country=${e.get("country")}`
      : "";
  const categoryQuery =
    e.get("category") !== "null" && e.get("category") !== null
      ? `&category=${e.get("category")}`
      : "";
  redirect(
    `${path}?page=1&limit=24${yearQuery}${typeQuery}${statusQuery}${countryQuery}${categoryQuery}`
  );
};
