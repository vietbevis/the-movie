import { handleMovieDetailAction } from "@/actions/common.action";
import { handleMovies } from "@/apiRequest";
import MovieDetails from "@/components/movie/MovieDetails";
import NavigationHeader from "@/components/navigation/NavigationHeader";
import { Metadata } from "next";
import React from "react";

export async function generateStaticParams() {
  const data = await handleMovies({ page: 1, limit: 50 });
  const paths: { slug: string }[] = [];
  data &&
    data.items.forEach((item) => {
      paths.push({ slug: item.slug });
    });
  return paths;
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { episode: string };
}): Promise<Metadata> {
  const response = await handleMovieDetailAction(params.slug);
  const defaultTitle = `${response?.movie?.name} - ${response?.movie?.origin_name} - VITFLIX`;
  if (searchParams.episode) {
    return {
      title: `Tập ${searchParams.episode} - ${defaultTitle}` || "",
    };
  }
  return {
    title: defaultTitle || "",
  };
}

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { episode: string };
}) => {
  const response = await handleMovieDetailAction(params.slug);

  return (
    <div className="container">
      <NavigationHeader nameMovie={response?.movie} />
      <MovieDetails movieDetail={response} />
    </div>
  );
};

export default page;
