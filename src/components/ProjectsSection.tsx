"use client";
import { BackgroundGradient } from "./ui/background-gradient";
import projectdata from "../data/project_details.json";
import Image from "next/image";
import Link from "next/link";

interface Projects {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
}

function ProjectsSection() {
  return (
    <div className="h-[50rem] w-full overflow-hidden dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
      <h1 className="flex justify-center items-center mb-16 mt-8 text-7xl leading-8 font-extrabold tracking-tight">Projects</h1>
      <div className="flex flex-row justify-center items-center gap-8">
      {projectdata.project.map((project: Projects) => (
        <BackgroundGradient
          key={project.id}
          className="rounded-[22px] max-w-sm p- sm:p-10 bg-white dark:bg-zinc-900 "
        >
          <Image
            src= {project.image}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-2xl"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {project.title}
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
          <Link href={project.link}>
          <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Learn more </span>
          </button>
          </Link>
        </BackgroundGradient>
      ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
