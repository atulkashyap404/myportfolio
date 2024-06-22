"use client";
import { HoverEffect } from "./ui/card-hover-effect";

interface Language {
  id: number;
  name: string;
  description: string;
  link: string;
}

function PlatformsTools() {
  return (
    <div className="flex flex-col justify-center dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
      <div className="flex flex-col justify-center  max-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="flex justify-center items-center text-3xl text-neutral text-bold pt-8 text-black">
            Tools/Platforms
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <HoverEffect items={language} />
        </div>
      </div>
    </div>
  );
}

export const language = [
  {
    id: 1,
    name: "VSCode",
    description:
      "VS Code is a versatile and efficient code editor loved by developers worldwide.",
    link: "",
  },
  {
    id: 2,
    name: " Git",
    description:
      "Git is a distributed version control system designed for managing software development projects.",
    link: "",
  },
  {
    id: 3,
    name: "Docker",
    description:
      "Docker simplifies software packaging and deployment by creating lightweight, portable containers.",
    link: "",
  },
  {
    id: 4,
    name: "Postman",
    description:
      "The postman in tech refers to a popular API development tool used for testing, debugging, and exploring APIs with ease.",
    link: "",
  },
  {
    id: 5,
    name: "Kubernetes",
    description:
      "Kubernetes revolutionizes tech by orchestrating containerized applications at scale with efficiency and resilience.",
    link: "",
  },
  {
    id: 6,
    name: "CI/CD",
    description:
      "CI/CD (Continuous Integration/Continuous Deployment) accelerates software development by automating testing and deployment processes, ensuring faster and more reliable delivery of applications.",
    link: "",
  },
];

export default PlatformsTools;
