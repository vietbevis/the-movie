import { Movie, MovieDetailType } from "@/types";
import { notFound } from "next/navigation";
import React from "react";

const PlayVideo = ({
  movie,
  episode,
}: {
  movie?: MovieDetailType;
  episode?: string;
}) => {
  let url = "";
  if (episode) {
    url =
      movie?.episodes[0].server_data[parseInt(episode ?? "") - 1].link_embed ??
      "";
  }

  return (
    <div
      className={`${
        episode ? "aspect-video w-full" : "w-0"
      }  overflow-hidden rounded-md transition-all duration-300 ease-in-out mx-auto`}
    >
      {episode && (
        <iframe
          src={url}
          title={movie?.movie.name}
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default PlayVideo;
