"use client";

import Image from "next/image";
import { BsViewList } from "react-icons/bs";
import DropDown from "./DropDown";

const Header = () => {
  const Icon = BsViewList;
  return (
    <div className="bg-white text-black py-8 px-6 sm:px-0 w-full flex flex-col sm:flex-row justify-between container mx-auto items-center">
      <div className="h-28 w-44 lg:w-64 relative">
        <Image
          src={"/assets/poke.png"}
          alt="Pokemon"
          className="object-cover"
          fill
        />
      </div>
      <DropDown />
    </div>
  );
};

export default Header;
