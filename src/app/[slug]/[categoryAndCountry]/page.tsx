import { handleMovies } from "@/apiRequest";
import CardMainList from "@/components/cards/CardMainList";
import PaginationCustom from "@/components/pagination/PaginationCustom";
import { MovieListResponseType, SlugType } from "@/types";
import React from "react";

const page = async ({
  params,
  searchParams,
}: {
  params: {
    slug: string;
    categoryAndCountry: SlugType | "moi-cap-nhat" | "series" | "single";
  };
  searchParams: {
    page: string;
  };
}) => {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  let data: MovieListResponseType | undefined = undefined;
  if (params.slug === "the-loai") {
    if (params.categoryAndCountry === "moi-cap-nhat") {
      const res = await handleMovies({
        page: currentPage,
        limit: 50, // Vô nghĩa với phim mới cập nhật
      });
      data = res;
    } else if (
      params.categoryAndCountry === "series" ||
      params.categoryAndCountry === "single"
    ) {
      const res = await handleMovies({
        page: currentPage,
        limit: 50,
        type: params.categoryAndCountry,
      });
      data = res;
    } else {
      const res = await handleMovies({
        page: currentPage,
        limit: 50,
        category: params.categoryAndCountry,
      });
      data = res;
    }
  } else {
    const res = await handleMovies({
      page: currentPage,
      limit: 50,
      country: params.categoryAndCountry,
    });
    data = res;
  }

  return (
    <div className="container">
      <CardMainList
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 mt-3"
        data={data?.items}
      />
      <PaginationCustom
        className={"mt-4"}
        url={`/${params.slug}/${params.categoryAndCountry}?page=`}
        pagination={data?.pagination}
      />
    </div>
  );
};

export default page;
