"use client";
import React, { useState } from "react";

import {
  UserCircleIcon,
  ShoppingCartIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex items-center space-x-3 relative h-full ">
      <UserCircleIcon
        onClick={() => setIsProfileOpen((prev) => !prev)}
        className="h-8 w-8 cursor-pointer"
      />
      {isProfileOpen && (
        <div className="absolute top-[100%] p-4 rounded-md right-0 w-full  flex flex-col gap-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/profile">Profile</Link>
          <Link href="/profile">Logout</Link>
        </div>
      )}
      <BellAlertIcon className="h-8 w-8 cursor-pointer" />

      <div className="relative cursor-pointer">
        <ShoppingCartIcon
          className="h-8 w-8 cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />

        <span className="whitespace-nowrap rounded-full  px-2.5 py-0.5 text-sm text-white absolute -top-6 -right-4 bg-lama">
          1000
        </span>
      </div>

      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
