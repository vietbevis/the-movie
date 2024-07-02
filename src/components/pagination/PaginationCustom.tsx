import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronsLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const PaginationCustom = ({ pagination, url, className }: any) => {
  const currentPage = +pagination?.currentPage || 1;
  const totalPages = pagination?.totalPages || 1;
  let left = currentPage - 3 > 0 ? currentPage - 3 : 0;
  let right = left + 5 < totalPages ? left + 5 : totalPages;
  left = right - left < 5 ? right - 5 : left;
  if (totalPages < 5) {
    left = 0;
    right = totalPages;
  }
  return (
    <div
      className={cn(
        "flex gap-1 items-center justify-center select-none",
        className
      )}
    >
      <Link
        href={`${url}${currentPage - 1}`}
        title={`Trang trước`}
        className={`dark:bg-dark1 bg-bgEE rounded-md size-8 lg:size-10 flex items-center justify-center ${
          currentPage === 1 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <ChevronLeft size={17} />
      </Link>
      <div
        className={`${
          left === 0 ? "hidden" : "block"
        } dark:bg-dark1 bg-bgEE rounded-md size-8 lg:size-10 flex items-center justify-center`}
      >
        ...
      </div>
      {Array.from({ length: right - left }, (_, i) => i + left + 1).map(
        (page) => (
          <Link
            key={page}
            href={`${url}${page}`}
            className={`rounded-md size-8 lg:size-10 text-center leading-8 lg:leading-10 inline-block transition-all duration-200 ${
              page === currentPage
                ? "bg-yellow-400 text-dark1 pointer-events-none"
                : "dark:bg-dark1 bg-bgEE dark:hover:bg-yellow-300 dark:hover:text-dark1 hover:bg-yellow-300 hover:text-dark1"
            }`}
          >
            {page}
          </Link>
        )
      )}
      <div
        className={`${
          right === totalPages ? "hidden" : "block"
        } dark:bg-dark1 bg-bgEE rounded-md size-8 lg:size-10 flex items-center justify-center`}
      >
        ...
      </div>
      <Link
        href={`${url}${currentPage + 1}`}
        title={`Trang tiếp theo`}
        className={`rotate-180 dark:bg-dark1 bg-bgEE rounded-md size-8 lg:size-10 flex items-center justify-center ${
          currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <ChevronLeft size={17} />
      </Link>
      <Link
        href={`${url}${totalPages}`}
        title={`Trang cuối`}
        className={`rotate-180 dark:bg-dark1 bg-bgEE rounded-md size-8 lg:size-10 flex items-center justify-center ${
          currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <ChevronsLeft size={17} />
      </Link>
    </div>
  );
};

export default PaginationCustom;
