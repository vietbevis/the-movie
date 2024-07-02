import React from "react";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <div className="container h-40 border-t border-input flex items-center justify-center">
      <Logo
        name="netflix"
        classNameContainer="flex items-center gap-3 text-2xl font-bold"
        classNameBrand="hidden md:block uppercase"
        classNameImg="w-12 h-12 md:w-14 md:h-14"
      />
    </div>
  );
};

export default Footer;
