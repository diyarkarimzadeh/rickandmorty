"use client";

import React from "react";
import NavbarItem from "./NavbarItem";

const DesktopMenu = () => {
  return (
    <div className="hidden md:block ">
      <div className="flex">
        <NavbarItem name="Home" link="/" />
        <NavbarItem name="Saved" link="/saved" />
      </div>
    </div>
  );
};

export default DesktopMenu;
