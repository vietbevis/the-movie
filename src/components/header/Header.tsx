"use client";

import React from "react";
import Logo from "../logo/Logo";
import { ModeToggle } from "../theme/ModeToggle";
import MenuLink from "./menu/MenuLink";
import MenuMobile from "./menu/MenuMobile";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";
import { Input } from "../ui/input";

const Header = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  return (
    <>
      <header className={`h-20 container min-w-96 border-b border-input`}>
        <div className={`flex gap-2 items-center h-full`}>
          <div className="block lg:hidden">
            <MenuMobile />
          </div>
          <Logo
            name="netflix"
            classNameContainer="flex items-center gap-3 text-2xl font-bold"
            classNameBrand="hidden md:block uppercase"
            classNameImg="w-12 h-12 md:w-14 md:h-14"
          />
          <div className="mx-auto lg:block hidden">
            <MenuLink />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant={"outline"}
              className="size-10 p-2"
              onClick={() => setIsOpened(!isOpened)}
            >
              {isOpened ? <X /> : <Search />}
            </Button>
            <ModeToggle />
            <Button className="h-10">Login</Button>
          </div>
        </div>
      </header>
      <div
        className={`${
          isOpened
            ? "h-16 border-b border-input opacity-100"
            : "h-0 border-none overflow-hidden opacity-0"
        }  transition-all duration-200 container flex items-center justify-center min-w-96 relative`}
      >
        <form action="" className="max-w-96 w-full">
          <Input placeholder="Search..." />
        </form>
        <div className="absolute top-full z-10 left-0 right-0 container min-w-96 hidden items-center justify-center py-4 bg-black bg-opacity-30">
          <h1>Không tìm thấy kết quả nào...</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
