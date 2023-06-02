"use client";

import React from "react";
import Button from "./Button";

const MainSection = () => {
  return (
    <div className="h-full w-full object-contain relative">
      <video
        className="h-full w-full object-cover bg-cove"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/rickmorty.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
        <h2 className="text-[24px] sm:text-[32px] md:text-5xl my-6 whitespace-nowrap">
          Rick and Morty
        </h2>
        <h2 className="text-[14px] sm:text-[18px] mb-5 whitespace-nowrap">
          by Diyar Karimzadeh
        </h2>
        <Button text="Github" link="github.com/diyarkarimzadeh" />
      </div>
    </div>
  );
};

export default MainSection;
