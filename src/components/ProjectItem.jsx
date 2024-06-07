import React from 'react'
import { FaGithub } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";


const ProjectItem = ({img, title, description, repo, live}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] cursor-pointer ">
        <img src={img} alt="/" className="rounded-xl group-hover:opacity-10 " />
        <div className="hidden group-hover:block absolute top-[50%] left-[30%] translate-x-[-20%] translate-y-[-50%] ">
            <h3 className="text-xl font-bold text-white tracking-wider text-center">
                {title}
            </h3>
            <p className="pb-3 pt-1 text-sm text-white text-center">{description}</p>
            <div className="flex gap-2 justify-center">
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