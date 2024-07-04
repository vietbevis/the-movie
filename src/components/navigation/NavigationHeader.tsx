import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const NavigationHeader = ({
  episode,
  categoryOrCountry,
  nameMovie,
  query,
}: any) => {
  return (
    <div className="min-w-[348px] container p-0">
      <div className="p-4 rounded-lg w-full ">
        <Breadcrumb>
          <BreadcrumbList className="flex-nowrap">
            <BreadcrumbItem>
              <Link href="/" className="text-nowrap min-w-16">
                Trang chủ
              </Link>
            </BreadcrumbItem>
            {query && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <p className="line-clamp-1 min-w-14 dark:text-white text-primary font-medium">
                    {query}
                  </p>
                </BreadcrumbItem>
              </>
            )}
            {nameMovie?.slug && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <Link
                    href={`/${nameMovie.slug}`}
                    className={`line-clamp-1 ${
                      !episode &&
                      "dark:text-white text-primary font-medium pointer-events-none"
                    }`}
                  >
                    {nameMovie.name}
                  </Link>
                </BreadcrumbItem>
              </>
            )}
            {episode && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <p className="line-clamp-1 min-w-14 dark:text-white text-primary font-medium">
                    {episode.toLowerCase() === "full"
                      ? "Full"
                      : `Tập ${episode}`}
                  </p>
                </BreadcrumbItem>
              </>
            )}
            {categoryOrCountry && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <p className="line-clamp-1 dark:text-white text-primary font-medium">
                    {categoryOrCountry}
                  </p>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default NavigationHeader;
