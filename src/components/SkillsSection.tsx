"use client";
import { HoverEffect } from "./ui/card-hover-effect";

interface Language {
  id: number;
  name: string;
  description: string;
  link: string;
}

function SkillsSection() {
  return (
    <div className="flex flex-col justify-center dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] ">
      <div className="flex flex-col justify-center  max-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className="flex justify-center items-center mb-8 mt-8 text-7xl sm:text-7xl leading-8 font-extrabold tracking-tight text-black">
            SKILLS
          </h1>
          <p className="flex justify-center items-center text-3xl text-neutral text-bold pt-8 text-black">
            Programming Languages
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
    name: "C",
    description:
      "C is a powerful, high-performance programming language widely used for system software and application development. ",
    link: "",
  },
  {
    id: 2,
    name: "C++",
    description:
      "C++ is a versatile, high-performance programming language widely used for system/software development and game programming.",
    link: "",
  },
  {
    id: 3,
    name: "Python",
    description:
      "Python is a versatile, high-level programming language known for its readability and ease of use. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.",
    link: "",
  },
  {
    id: 4,
    name: "JavaScript",
    description:
      "JavaScript is a versatile, high-level programming language primarily used to create interactive effects within web browsers.",
    link: "",
  },
  {
    id: 5,
    name: "TypeScript",
    description:
      "TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript, enhancing development with static typing and modern ECMAScript features.",
    link: "",
  },
  {
    id: 6,
    name: "CSS",
    description:
      "CSS (Cascading Style Sheets) is a language used to describe the presentation of a document written in HTML or XML, including layout, colors, and fonts.",
    link: "",
  },
  {
    id: 7,
    name: "HTML",
    description:
      "HTML (HyperText Markup Language) is the standard language used to create and design webpages.",
    link: "",
  },
  {
    id: 8,
    name: "Go",
    description:
      "Go is a statically typed, compiled programming language designed by Google, known for its simplicity and efficiency in building scalable, concurrent applications.",
    link: "",
  },
];

export default SkillsSection;
