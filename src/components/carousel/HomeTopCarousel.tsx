import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardCarousel from "../cards/CardCarousel";
import { MoviesResponseType } from "@/types";

const HomeTopCarousel = ({ data }: { data: MoviesResponseType[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {data?.map((item) => (
          <CarouselItem
            key={item._id}
            className="lg:basis-1/6 md:basis-1/4 sm:basis-1/3 basis-1/2"
          >
            <CardCarousel data={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HomeTopCarousel;
