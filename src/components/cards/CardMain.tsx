import { checkImage, cn } from "@/lib/utils";
import { MoviesResponseType } from "@/types";
import { PlayCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CardMain = ({
  movie,
  className,
}: {
  movie: MoviesResponseType;
  className?: string;
}) => {
  return (
    <div title={movie?.name} className={cn("rounded-lg group", className)}>
      <Link
        href={`/${movie?.slug}`}
        className="w-full relative aspect-[3/4] mb-2 rounded-md overflow-hidden block"
      >
        <img
          src={checkImage(movie?.thumb_url)}
          alt={movie?.name}
          width={300}
          height={200}
          className="rounded-md w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:bg-opacity-60 group-hover:opacity-100 transition-all duration-300">
          <PlayCircleIcon
            strokeWidth={1}
            className="text-white w-12 h-12 scale-0 group-hover:scale-100 transition-all duration-300"
          />
        </div>
        <div className="absolute top-2 left-0 bg-black bg-opacity-60 pointer-events-none rounded-r-sm p-1 ">
          <span className="text-white text-xs px-1 line-clamp-1">
            {movie?.episode_current}
          </span>
        </div>
      </Link>
      <Link
        href={`/${movie?.slug}`}
        className="hover:underline hover:underline-offset-2 text-sm line-clamp-1 text-center font-medium w-full px-3"
      >
        {movie?.name}
      </Link>
      <Link
        href={`/${movie?.slug}`}
        className="hover:underline hover:underline-offset-2 text-xs line-clamp-1 text-center w-full px-3 opacity-50"
      >
        {movie?.origin_name}
      </Link>
    </div>
  );
};

export default CardMain;
