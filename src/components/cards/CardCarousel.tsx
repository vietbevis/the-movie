import { checkImage, cn } from "@/lib/utils";
import { MoviesResponseType } from "@/types";
import { PlayCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CardCarousel = ({
  className,
  data,
}: {
  className?: string;
  data: MoviesResponseType;
}) => {
  return (
    <div className={cn("aspect-[3/4]", className)}>
      <div
        className="w-full h-full rounded-sm overflow-hidden relative group select-none"
        title={data?.name}
      >
        <img
          src={checkImage(data?.thumb_url)}
          alt=""
          width={300}
          height={400}
          className="w-full h-full object-cover object-center group-hover:scale-110 tránisition-all duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-center bg-gradient-to-t from-[#000000d3] bg-opacity-50 text-white px-3 text-center group-hover:opacity-0 transition-all duration-300">
          <div className="text-sm font-bold line-clamp-2">{data?.name}</div>
        </div>
        <Link
          href={`/${data?.slug}`}
          className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-0 flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-300"
        >
          <PlayCircleIcon
            size={40}
            className="text-white group-hover:scale-100 scale-0 transition-all duration-300"
            strokeWidth={1}
          />
          <span className="absolute top-1 right-1 bg-red-400 text-white rounded-lg px-2 py-1 uppercase text-sm font-bold">
            {data?.quality}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CardCarousel;
