"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  link: string;
}

const Button = ({ text, link }: ButtonProps) => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("https://github.com/diyarkarimzadeh");
        }}
        className="bg-white px-4 py-2 rounded text-neutral-900"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
