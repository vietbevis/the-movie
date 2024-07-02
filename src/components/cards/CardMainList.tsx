import React from "react";
import CardMain from "./CardMain";
import { cn } from "@/lib/utils";
import { MoviesResponseType } from "@/types";

interface CardMainProps {
  className?: string;
  data: MoviesResponseType[];
  classNameItem?: string;
}

const CardMainList = ({ className, data, classNameItem }: CardMainProps) => {
  const movies = data || [];
  return (
    <>
      <div className={cn("select-none", className)}>
        {movies.length > 0 ? (
          <>
            {movies?.map((movie: MoviesResponseType) => (
              <CardMain
                key={movie._id}
                movie={movie}
                className={classNameItem}
              />
            ))}
          </>
        ) : (
          <h1>Không tồn tại phim nào...</h1>
        )}
      </div>
    </>
  );
};

export default CardMainList;
