import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai';
import {GrProjects} from 'react-icons/gr';
import { GiSkills } from "react-icons/gi";

const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
      setNav(!nav)
    };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className="fixed top-4 right-4 z-[99] md:hidden" />
      {
        nav ? (
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
            <a onClick={handleNav}
               href="#main" 
               className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a onClick={handleNav}
               href="#projects" 
               className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
               <GrProjects size={20} />
              <span className="pl-4">Projects</span>
            </a>
            <a onClick={handleNav}
               href="#skills" 
               className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
               <GiSkills size={20} />
              <span className="pl-4">Skills</span>
            </a>
          </div>
        )
        : (
          ''
        )
      }
{/* THIS IS THE DESKTOP MODE */}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <AiOutlineHome size={20} />
            <span className="text-white text-lg pl-2 pr-2 bg-blue-500 rounded-md font-bold opacity-0 transition-opacity absolute top-1/2 transform -translate-y-1/2 invisible whitespace-nowrap" style={{ left: '62px' }}>
              {'< Home />'}
            </span>
          </a>
          <a href="#projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
          <GrProjects size={20} />
          <span className="text-white text-lg pl-2 pr-2 bg-blue-500 rounded-md font-bold opacity-0 transition-opacity absolute top-1/2 transform -translate-y-1/2 invisible whitespace-nowrap" style={{ left: '62px' }}>
              {'< Projects />'}
          </span>
          </a>
          <a href="#projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
          <GiSkills size={20} />
          <span className="text-white text-lg pl-2 pr-2 bg-blue-500 rounded-md font-bold opacity-0 transition-opacity absolute top-1/2 transform -translate-y-1/2 invisible whitespace-nowrap" style={{ left: '62px' }}>
              {'< Skills />'}
          </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidenav