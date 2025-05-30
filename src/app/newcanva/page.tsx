"use client";
import React from "react";
import { Cover } from "@/components/ui/cover";
import { BackgroundGradient } from "../../components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <>
      <div className="h-full w-full relative  items-center justify-center bg-black dark:bg-black bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.2] font-mono scroll-smooth">
        <div className="flex flex-col items-center justify-center">
          <div className="h-screen w-full flex-col flex justify-center items-center">
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 via-neutral-400 to-neutral-700 dark:via-white dark:to-gray-500">
              Transforming Ideas into Stunning Realities <br /> at{" "}
              <Cover>NewCanva</Cover>
            </h1>
            <Link href={"https://x.com/AtulKumarManjh5"}>
              <button className="rounded-xl bg-green-500  border border-black  text-sm shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4  tracking-widest bg-transparent hover:bg-[#4c41ec] hover:text-white dark:text-neutral-200 transition duration-200 flex-1 w-full md:w-auto">
                Get Started
              </button>
            </Link>
          </div>
          <div className="h-[40rem] w-full text-white">
            <div className="flex flex-col justify-center items-center">
              <div>
                <h2 className="text-3xl ">What We Do</h2>
              </div>
              <div className="flex flex-row justify-center items-center">
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
