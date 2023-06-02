"use client";

import React from "react";
import Image from "next/image";

const EmptyPage = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center">
      <Image
        className="rounded-full my-6"
        src="/sadrick.jpg"
        width={124}
        height={124}
        alt="Sad Rick"
      />
      <p>There is no character in your saved characters!</p>
    </div>
  );
};

export default EmptyPage;
