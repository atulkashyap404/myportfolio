"use client";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
function AboutUs() {
  const words = `Describe NewCanva as a forward-thinking digital agency with a passion for creativity. Emphasize the team's expertise in video editing, logo design, and web development. Mention your commitment to delivering high-quality, personalized services that help clients stand out in a competitive market.`;

  return (
    <div className="h-full w-full relative  items-center justify-center bg-black dark:bg-black bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.2] font-mono ">
      <div className="h-full rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
        <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
          <span>who</span>
          <span>We</span>
          <span>Are</span>
        </h2>

        <TextGenerateEffect words={words} />

        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
}

export default AboutUs;
