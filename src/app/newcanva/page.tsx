"use client";
import React from "react";
import { Cover } from "@/components/ui/cover";
import AboutUs from "@/components/AboutUs";

function Page() {
  return (
    <>
    <div className="h-full w-full relative  items-center justify-center bg-black dark:bg-black bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.2] font-mono scroll-smooth">
      <div className="flex flex-col items-center justify-center">
        <div className="h-screen w-full flex justify-center items-center">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 via-neutral-400 to-neutral-700 dark:via-white dark:to-gray-500">
          Transforming Ideas into Stunning Realities <br /> at <Cover>NewCanva</Cover>
          </h1>
        </div>
      </div>
    </div>
    <div className="h-screen w-full">
    <AboutUs />
    </div>
    </>
  );
}

export default Page;
