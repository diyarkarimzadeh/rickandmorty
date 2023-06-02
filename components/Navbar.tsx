"use client";

import React from "react";
import { Banana } from "lucide-react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  return (
    <div className="h-[80px] flex items-center justify-around">
      <div className="flex">
        <Banana />
        <h1 className="ml-4">Rick and Morty</h1>
      </div>
      <DesktopMenu />
      <MobileMenu />
    </div>
  );
};

export default Navbar;
