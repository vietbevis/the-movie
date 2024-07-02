import { handleMovies } from "@/apiRequest";
import CardMainList from "@/components/cards/CardMainList";
import HomeTopCarousel from "@/components/carousel/HomeTopCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const [carousel, movies, trailer] = await Promise.all([
    handleMovies({ page: 1, limit: 24, type: "hoathinh" }),
    handleMovies({ page: 1, limit: 50 }),
    handleMovies({ page: 1, limit: 24, status: "trailer" }),
  ]);

  const anime = carousel?.items;
  const newMovies = movies?.items;
  const newTrailer = trailer?.items;

  return (
    <>
      <section className="flex gap-2 text-black/50 dark:text-white/50 items-center justify-center flex-col py-5 text-base border-b border-input container">
        <p>Vừa xem vừa test giúp mình nhé!</p>
        <p>
          Bug liên hệ mình qua telegram{" "}
          <Link href={""} className="text-blue-500">
            VietNguyen
          </Link>
        </p>
        <p>
          Cảm ơn mọi người nhiều <span className="text-red-500">❤ ❤ ❤</span>
        </p>
      </section>
      <section className="container py-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Hoạt hình</h2>
          <Button variant={"outline"} size={"sm"}>
            <Link href={"/the-loai/hoathinh"}>Xem Thêm</Link>
          </Button>
        </div>
        <HomeTopCarousel data={anime} />
      </section>
      <div className="container lg:grid lg:grid-cols-4 lg:gap-4 items-start">
        <section className="col-span-3 py-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Mới cập nhật</h2>
            <Button variant={"outline"} size={"sm"}>
              <Link href={"/the-loai/moi-cap-nhat"}>Xem Thêm</Link>
            </Button>
          </div>
          <CardMainList
            data={newMovies}
            className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
          />
        </section>
        {/* Làm sau sidebar right */}
        <div>
          <div className="h-96 bg-input mt-20 rounded-md"></div>
          <div className="h-96 bg-input mt-20 rounded-md"></div>
        </div>
        {/* End sidebar right */}
        <section className="py-5 col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Sắp chiếu</h2>
            <Button variant={"outline"} size={"sm"}>
              <Link href={"/the-loai/trailer"}>Xem Thêm</Link>
            </Button>
          </div>
          <CardMainList
            data={newTrailer}
            className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
          />
        </section>
      </div>
    </>
  );
}
