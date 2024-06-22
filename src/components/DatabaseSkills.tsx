"use client"
import { HoverEffect } from "./ui/card-hover-effect";


interface Language {
  id: number;
  name: string;
  description: string;
  link: string;
}

function DatabaseSkills() {
  return (
    <div className="h-[50rem] w-full overflow-hidden dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] ">
      <p className="flex justify-center items-center text-3xl text-neutral text-bold pt-8 text-black">Databases</p>
      <div className=" max-w-7xl mx-auto px-4">
      <HoverEffect items={language} />
    </div>
    </div>
  )
}



export const language = [
  {
    id: 1,
    name: "MongoDB",
    description: "MongoDB is a popular NoSQL database known for its flexibility and scalability.",
    link: ""
    
},
{
    id: 2,
    name: "PostgreSQL",
    description: "PostgreSQL is a powerful open-source relational database management system known for its robustness and extensibility.",
    link: ""
},
{
    id: 3,
    name: "SQL",
    description: "QL (Structured Query Language) is used to manage and manipulate relational databases.",
    link: ""
},


]

export default DatabaseSkills
