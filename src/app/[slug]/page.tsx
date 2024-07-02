import { handleMovieDetailAction } from "@/actions/common.action";
import { handleMovies } from "@/apiRequest";
import MovieDetails from "@/components/movie/MovieDetails";
import React from "react";

export async function generateStaticParams() {
  const data = await handleMovies({ page: 1, limit: 50 });
  const totalPages = data?.pagination?.totalPages;
  const paths: { slug: string }[] = [];
  data &&
    data.items.forEach((item) => {
      paths.push({ slug: item.slug });
    });
  // if (totalPages && totalPages > 1) {
  //   for (let i = 2; i <= totalPages; i++) {
  //     const data = await handleMovies({ page: i, limit: 50 });
  //     data &&
  //       data.items.forEach((item) => {
  //         paths.push({ slug: item.slug });
  //       });
  //   }
  // }
  return paths;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const response = await handleMovieDetailAction(params.slug);

  return (
    <div className="container">
      {/* <NavigationHeader nameMovie={movieDetail?.movie} /> */}
      <MovieDetails movieDetail={response} />
    </div>
  );
};

export default page;
