"use client";
import { BackgroundGradient } from "./ui/background-gradient";
import projectdata from "../data/project_details.json";
import Image from "next/image";
import Link from "next/link";

interface Projects {
  id: number;
  title: string;
  url: string;
  description: string;
}

function ProjectsSection() {
  return (
    <div className="flex items-center justify-center h-[40rem] w-full overflow-hidden dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] absolute ">
      <div className="flex flex-row justify-center items-center gap-8">
      {projectdata.project.map((project: Projects) => (
        <BackgroundGradient
          key={project.id}
          className="rounded-[22px] max-w-sm p- sm:p-10 bg-white dark:bg-zinc-900 "
        >
          <Image
            src={project.url}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {project.title}
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
          <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Learn more </span>
            
          </button>
        </BackgroundGradient>
      ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
