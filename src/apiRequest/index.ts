import { PropsMoviesAction } from "@/actions/common.action";
import { MovieListResponseType } from "@/types";

export const handleMovies = async ({
  year,
  type,
  status,
  country,
  category,
  page,
  limit,
}: PropsMoviesAction): Promise<MovieListResponseType> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;
  try {
    const yearQuery = year ? `&year=${year}` : "";
    const typeQuery = type ? `&type=${type}` : "";
    const statusQuery = status ? `&status=${status}` : "";
    const countryQuery = country ? `&country=${country}` : "";
    const categoryQuery = category ? `&category=${category}` : "";
    let url = "";

    if (year || type || status || country || category) {
      url = `/danh-sach?page=${page ?? 1}&limit=${
        limit ?? 12
      }${yearQuery}${typeQuery}${statusQuery}${countryQuery}${categoryQuery}`;
    } else {
      url = `/danh-sach/phim-moi-cap-nhat?page=${page ?? 1}`;
    }
    const response = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 60,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching handleMoviesAction:", error);
    throw error;
  }
};

export const handleMovieDetail = async (slug: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;
  try {
    const url = `/phim/${slug}`;
    const response = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 60,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching handleMovieDetailAction:", error);
    throw error;
  }
};
