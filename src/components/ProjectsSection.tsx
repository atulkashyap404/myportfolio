'use client'
import { PinContainer } from "./ui/3d-pin";
import projectData from "@/data/project_details.json"

interface Projects{
          "id": number,
          "title": string,
          "url": string,
          "description": string
}

function ProjectsSection() {
  return (
    <div className="flex items-center justify-center h-[40rem] w-full overflow-hidden dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] absolute">
      

      {projectData.project.map((projects: Projects) => (
       <PinContainer
       key={projects.id}
       title={projects.title}
       
     >
       <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
         <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
           {projects.title}
         </h3>
         <div className="text-base !m-0 !p-0 font-normal">
           <span className="text-slate-500 ">
             {projects.description}
           </span>
         </div>
         <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
       </div>
     </PinContainer> 
      ))}

      
    </div>
  )
}

export default ProjectsSection
