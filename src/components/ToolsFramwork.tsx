"use client"
import { HoverEffect } from "./ui/card-hover-effect";


interface Language {
  id: number;
  name: string;
  description: string;
  link: string;
}

function ToolsFramework() {
  return (
    <div className="h-[50rem] w-full overflow-hidden dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
      <p className="flex justify-center items-center text-3xl text-neutral text-bold pt-8 text-black">Libraries/Frameworks</p>
      <div className="max-w-7xl mx-auto px-4">
      <HoverEffect items={language} />
    </div>
    </div>
  )
}



export const language = [
  {
    id: 1,
    name: "React.js",
    description: "React.js is a JavaScript library for building user interfaces, particularly single-page applications, using a component-based architecture.",
    link: ""
    
},
{
    id: 2,
    name: "Next.js",
    description: "Next.js is a powerful React framework for building fast, scalable, and user-friendly web applications with server-side rendering and static site generation capabilities.",
    link: ""
},
{
    id: 3,
    name: "Node.js",
    description: "Node.js is a powerful runtime environment that allows server-side JavaScript execution.",
    link: ""
},
{
    id: 4,
    name: "Express",
    description: "Express is a minimalist web framework for Node.js, known for its flexibility and robust feature set.",
    link: ""
},
{
    id: 5,
    name: "numpy",
    description: "NumPy is a powerful Python library for numerical computing and data manipulation.",
    link: ""
},
{
    id: 6,
    name: "OpenCV",
    description: "OpenCV (Open Source Computer Vision Library) is a powerful toolset for real-time computer vision and image processing tasks.",
    link: ""
},
{
    id: 7,
    name: "Panadas",
    description: "The Panadas library in Python is renowned for its powerful data manipulation and analysis capabilities.",
    link: ""
},
{
    id: 8,
    name: "Scikit-learn",
    description: "Scikit-learn is a versatile Python library for machine learning tasks, offering tools for classification, regression, clustering, and more.",
    link: ""
},
{
    id: 9,
    name: "Django",
    description: "Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design.",
    link: ""
}
]

export default ToolsFramework
