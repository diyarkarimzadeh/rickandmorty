"use-client";

import React, { useState } from "react";
import { CircleEqual } from "lucide-react";
import NavbarItem from "./NavbarItem";

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="block md:hidden relative">
      <div
        className="flex"
        onClick={() => {
          setOpen((state) => !state);
        }}
      >
        <CircleEqual />
      </div>
      {open && (
        <div className="absolute top-8 right-2 bg-white py-5 px-2 rounded z-50 transform text-neutral-900">
          <NavbarItem name="Home" link="/" />
          <hr className="my-3" />
          <NavbarItem name="Saved" link="/saved" />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
