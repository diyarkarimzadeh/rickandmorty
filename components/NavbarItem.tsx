"use client";

import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  name: string;
  link: string;
}

const NavbarItem = ({ name, link }: NavbarItemProps) => {
  return (
    <Link href={link}>
      <div className="mx-4 cursor-pointer">
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default NavbarItem;
