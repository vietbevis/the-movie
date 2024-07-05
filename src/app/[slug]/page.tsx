import { handleMovieDetailAction } from "@/actions/common.action";
import { handleMovies } from "@/apiRequest";
import MovieDetails from "@/components/movie/MovieDetails";
import NavigationHeader from "@/components/navigation/NavigationHeader";
import PlayVideo from "@/components/player/PlayVideo";
import { Metadata } from "next";
import React from "react";

export async function generateStaticParams() {
  const paths: { slug: string }[] = [];

  const requests = [
    ...Array.from({ length: 5 }, (_, i) =>
      handleMovies({ page: i + 1, limit: 50 })
    ),
    ...Array.from({ length: 2 }, (_, i) =>
      handleMovies({ page: i + 1, limit: 50, status: "trailer" })
    ),
    ...Array.from({ length: 2 }, (_, i) =>
      handleMovies({ page: i + 1, limit: 50, type: "series" })
    ),
    ...Array.from({ length: 2 }, (_, i) =>
      handleMovies({ page: i + 1, limit: 50, type: "single" })
    ),
  ];

  const allResponses = await Promise.all(requests);

  allResponses.forEach((response) => {
    response.items.forEach((item) => {
      paths.push({ slug: item.slug });
    });
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
  const episode = searchParams?.episode;

  return (
    <div className="container">
      <NavigationHeader
        nameMovie={response?.movie}
        episode={searchParams.episode}
      />
      <PlayVideo movie={response} episode={searchParams?.episode} />
      <MovieDetails movieDetail={response} />
    </div>
  );
};

export default page;
