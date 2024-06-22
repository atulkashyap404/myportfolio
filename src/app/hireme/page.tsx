"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";

function Page() {
  const words = [
    {
      text: "I'm",
    },
    {
      text: "looking",
    },
    {
      text: "forward",
    },
    {
      text: "to",
    },
    {
      text: "talking",
    },
    {
      text: "with",
    },
    {
      text: "you",
    },
  ];
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-[40rem]">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to fullstack Developer starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <Link href={"https://wa.me/qr/TEVLY3AABYVWO1"}>
          <button className="rounded-xl bg-white  border border-black  text-sm shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4  tracking-widest bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            Chat with me
          </button>
          </Link>
          <Link href={"https://github.com/atulkashyap404"}>
          <button className="rounded-xl bg-white  border border-black  text-sm shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4  tracking-widest bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            Github
          </button>
          </Link>
          <Link href={"https://www.linkedin.com/in/atul-kumar404/"}>
          <button className="rounded-xl bg-white  border border-black  text-sm shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4  tracking-widest bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            LinkedIn
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Page;
