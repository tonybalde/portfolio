import React from 'react'
import { FaGithub } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";


const ProjectItem = ({img, title, description, repo, live}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
        <img src={img} alt="/" className="rounded-xl group-hover:opacity-10 " />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                {title}
            </h3>
            <p className="pb-1 pt-1 text-sm text-white text-center">{description}</p>
            <div class="flex gap-2 justify-center">
              <a href={repo} target='_blank'>
                  <p className="flex gap-2 text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm"><FaGithub size={18} /> Repo</p>
              </a>
              <a href={live} target='_blank'>
                  <p className="flex gap-2 text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm"><RiComputerLine size={18}/> Live</p>
              </a>
            </div>            
        </div>
    </div>
  )
}

export default ProjectItem