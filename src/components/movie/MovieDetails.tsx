import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { checkImage } from "@/lib/utils";
import { Star } from "lucide-react";

const MovieDetails = async ({ movieDetail }: any) => {
  const isLoading = !movieDetail;
  const movie = movieDetail?.movie;

  const director = movie?.director?.join(", ") ?? "";
  const category =
    movie?.category?.map((item: any) => item.name).join(", ") ?? "";
  const actor = movie?.actor?.join(", ") ?? "";
  const country =
    movie?.country?.map((item: any) => item.name).join(", ") ?? "";

  return (
    <>
      <div className="bg-background p-3 rounded-md xl:flex gap-4 items-start">
        <div className="space-y-3">
          <div className="sm:w-80 w-full aspect-[3/4] rounded-sm overflow-hidden mx-auto mb-4 xl:mb-0 relative">
            {isLoading ? (
              <Skeleton className="h-full w-full" />
            ) : (
              <img
                src={checkImage(movie?.thumb_url)}
                width={3200}
                height={4800}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-dark1 bg-opacity-50 flex items-center p-4 gap-3">
              <Button variant={"outline"} className="w-full">
                <Link href={`${movie?.trailer_url}`} target={"_blank"}>
                  Trailer
                </Link>
              </Button>
              <Button className="w-full">
                <Link
                  href={`/${movie?.slug}/${
                    movieDetail?.episodes[0].server_data.length === 1
                      ? movieDetail?.episodes[0].server_data[0].slug
                      : "1"
                  }`}
                >
                  Xem phim
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="flex-1 space-y-3">
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-6 w-1/4" />
          </div>
        ) : (
          <div className="flex-1">
            <h1 className="lg:text-3xl text-2xl uppercase xl:text-left text-center text-foreground dark:text-yellowFF font-semibold line-clamp-3">
              {movie?.name}
            </h1>
            <p className="opacity-50">
              {movie?.origin_name} ({movie?.year})
            </p>
            <div className="py-2 px-3 mt-3 space-y-2 rounded-sm lg:text-base text-sm">
              <p>
                <span className="font-semibold opacity-50">Trạng thái:</span>{" "}
                <span className="bg-background px-2">
                  {movie?.episode_current}
                </span>
              </p>
              <p>
                <span className="font-semibold opacity-50">Đạo diễn:</span>{" "}
                {director}
              </p>
              <p>
                <span className="font-semibold opacity-50">Thời lương:</span>{" "}
                {movie?.time}
              </p>
              <p>
                <span className="font-semibold opacity-50">Số tập:</span>{" "}
                {movie?.episode_total}
              </p>
              <p>
                <span className="font-semibold opacity-50">Tình trạng:</span>{" "}
                {movie?.status === "completed" ? "Hoàn thành" : "Đang cập nhật"}
              </p>
              <p>
                <span className="font-semibold opacity-50">Ngôn ngữ:</span>{" "}
                {movie?.lang}
              </p>
              <p>
                <span className="font-semibold opacity-50">Năm sản xuất:</span>{" "}
                {movie?.year}
              </p>
              <p>
                <span className="font-semibold opacity-50">Quốc gia:</span>{" "}
                {country}
              </p>
              <p>
                <span className="font-semibold opacity-50">Thể loại:</span>{" "}
                {category}
              </p>
              <p>
                <span className="font-semibold opacity-50">Diễn viên:</span>{" "}
                {actor}
              </p>
            </div>
            <div className="p-3 mt-3 space-y-2 rounded-sm lg:text-base text-sm">
              <div className="space-x-2 mb-4">
                <Button>Thích</Button>
                <Button>Chia sẻ</Button>
              </div>
              <div className="md:flex items-center gap-1 md:space-y-0 space-y-2">
                <div className="flex items-center gap-1">
                  <Star width="18" height="18" color="#FFB700" />
                  <Star width="18" height="18" color="#FFB700" />
                  <Star width="18" height="18" color="#FFB700" />
                  <Star width="18" height="18" color="#FFB700" />
                  <Star width="18" height="18" color="#FFB700" />
                  <Star width="18" height="18" color="#FFB700" />
                  <Star width="18" height="18" color="#FFB700" />
                  <Star width="18" height="18" color="#FFB700" />
                  <Star width="18" height="18" color="#FFB700" />
                  <Star width="18" height="18" color="#FFB700" />
                </div>
                <p className="ml-2">(10 điêm / 100 lượt)</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="border border-yellowFF p-3 bg-background mt-3 rounded-md">
        <span className="uppercase font-semibold">LỊCH CHIẾU: </span>Đang cập
        nhật
      </div>
      <div className="bg-background p-3 mt-3 rounded-md flex gap-2 items-center flex-wrap">
        <span className="uppercase font-semibold text-lg">TẬP MỚI NHẤT :</span>
        {movieDetail?.episodes[0].server_data
          .map((item: any, index: number) => (
            <Button
              key={index}
              title={item.name}
              variant={"outline"}
              className="size-10 dark:bg-gray-700 dark:hover:bg-gray-800 p-0"
            >
              <Link
                href={`/${movie?.slug}/${item.slug}`}
                className="w-full h-full leading-10 text-center"
              >
                {index + 1}
              </Link>
            </Button>
          ))
          .reverse()
          .slice(0, 5)}
      </div>
      <div className="bg-background p-3 mt-3 rounded-md">
        <p className="uppercase font-semibold text-xl">NỘI DUNG PHIM</p>
        <p className="capitalize font-semibold mt-2 mb-1 opacity-50">
          {movie?.name} - {movie?.origin_name} ({movie?.year})
        </p>
        <p className="opacity-50">{movie?.content}</p>
      </div>
    </>
  );
};

export default MovieDetails;
