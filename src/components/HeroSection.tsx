'use client'
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import profilepic from "../../public/images/me.jpg";
import { FlipWords } from "./ui/flip-words";

function HeroSection() {
  const words = ["Frontend", "Backend", "Python-Django", "MERN-Stack", "React-Native", "UI/UX-Design"]
  return (
    <div className="flex flex-col justify-center h-[90rem] w-full overflow-hidden dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
      <ContainerScroll
        titleComponent={
          <>
          
            <h1 className="text-4xl sm:text-7xl lg:text-[6rem] font-bold mb-5 leading-none text-black">
              Hi, I&apos;m Atul Kashyap<br />
              <p className="text-slate-500 text-xl font-normal">I&apos;m passionate Fullstack Developer with an interest in</p>
              <span className="text-4xl font-semibold text-black dark:text-white">
              <FlipWords words={words} />
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={profilepic}
          alt="Atul Kashyap"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover w-[40rem] h-[40rem]"
          draggable={false}
          
        />
      </ContainerScroll>
    </div>
  )
}

export default HeroSection
