import { categories, countries } from "@/constants";
import { count } from "console";
export type MoviesResponseType = {
  modified: {
    time: string;
  };
  _id: number;
  name: string;
  slug: string;
  origin_name: string;
  episode_current: string;
  episode_total: string;
  quality: string;
  lang: string;
  imdb_rating: string;
  thumb_url: string;
  poster_url: string;
  year: number;
};

export type PaginationType = {
  totalItems: string;
  totalItemsPerPage: number;
  currentPage: string;
  totalPages: number;
};

export type MovieListResponseType = {
  status: boolean;
  items: MoviesResponseType[];
  pathImage: string;
  pagination: PaginationType;
};
export type SlugType =
  | "viet-nam"
  | "trung-quoc"
  | "thai-lan"
  | "au-my"
  | "han-quoc"
  | "nhat-ban"
  | "philippines"
  | "malaysia"
  | "dai-loan"
  | "an-do"
  | "uc"
  | "mexico"
  | "canada"
  | "hong-kong"
  | "singapore"
  | "anh"
  | "nigeria"
  | "y"
  | "tay-ban-nha"
  | "phap"
  | "nam-phi"
  | "a-rap-xe-ut"
  | "quoc-gia-khac"
  | "duc"
  | "brazil"
  | "thuy-dien"
  | "ba-lan"
  | "bi"
  | "thuy-si"
  | "tho-nhi-ky"
  | "dan-mach"
  | "colombia"
  | "argentina"
  | "bo-dao-nha"
  | "na-uy"
  | "indonesia"
  | "phan-lan"
  | "chau-phi"
  | "ha-lan"
  | "ukraina"
  | "nga"
  | "ireland"
  | "mongolia"
  | "sec"
  | "hong-kon"
  | "uae"
  | "hoa-ky"
  | "phapduc"
  | "iran"
  | "ukraine"
  | "peru"
  | "new-zealand"
  | "romania"
  | "ao"
  | "ghana"
  | "hungary"
  | "kenya"
  | "iceland"
  | "mauritius"
  | "uruguay"
  | "thai-lanphap"
  | "georgia"
  | "bulgaria"
  | "lien-xo"
  | "chile"
  | "cuba"
  | "congo"
  | "malta"
  | "a-rap-thong-nhat"
  | "israel"
  | "cambodia"
  | "serbia"
  | "lithuania"
  | "bahamas"
  | "qatar"
  | "albania"
  | "greenland"
  | "maroc"
  | "greece"
  | "kazakhstan"
  | "vietnam"
  | "cong-hoa-dominica"
  | "luxembourg"
  | "slovenia"
  | "belgium"
  | "dao-sip"
  | "li-bang"
  | "latvia"
  | "denmark"
  | "venezuela"
  | "hong-ko"
  | "hy-lap"
  | "dai-loan"
  | "2003"
  | "belarus"
  | "tinh-cam"
  | "hai-huoc"
  | "chinh-kich"
  | "phieu-luu"
  | "hanh-dong"
  | "tam-ly"
  | "kinh-di"
  | "bi-an"
  | "vien-tuong"
  | "khoa-hoc"
  | "hinh-su"
  | "chien-tranh"
  | "co-trang"
  | "vo-thuat"
  | "gia-dinh"
  | "hoat-hinh"
  | "tai-lieu"
  | "hoc-duong"
  | "am-nhac"
  | "the-thao"
  | "than-thoai"
  | "lich-su"
  | "phim-18"
  | "gia-tuong"
  | "gay-can"
  | "kinh-dien"
  | "chuong-trinh-truyen-hinh"
  | "mien-tay"
  | "lang-man"
  | "khoa-hoc-vien-tuong"
  | "phim-hai"
  | "gia-dinh"
  | "phim-nhac";
