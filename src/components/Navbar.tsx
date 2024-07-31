import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import NavIcons from "./NavIcons";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <header className=" h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 sticky top-0  ">
        {/* MOBILE SCREEN */}

        <div className=" h-full  flex justify-between items-center md:hidden">
          <Link href="/" className="flex items-center space-x-3">
            <span className=" font-semibold text-lg tracking-wide">
              Kennedy-Wix
            </span>
          </Link>
          <MobileMenu />
        </div>

        {/* Large Screens */}

        <div className=" h-full hidden md:flex  justify-between items-center   ">
          <Link href="/" className="flex items-center space-x-3 w-1/3">
            <ShoppingCartIcon className="h-10 w-10 hidden md:block" />
            <span className=" font-semibold text-2xl tracking-wide">
              Kennedy-Wix
            </span>
          </Link>

          <div className="w-2/3  flex items-center flex-1 gap-10">
            <Search />
            <NavIcons />
          </div>
        </div>
      </header>

      <div className="text-base space-x-6 sticky top-20   hidden md:flex  items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 border-b-2 border-gray-100 pb-2 ">
        <Link href="#">Homepage</Link>
        <Link href="#">Shop</Link>
        <Link href="#">Deals</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>
    </>
  );
};

export default Navbar;
