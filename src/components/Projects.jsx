import React from 'react'
import ProjectItem from './ProjectItem'
import defaultImg from '../assets/default-preview.gif'

const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'> 
        <h1 className="text-4xl font-bold text-center text-black pl-2 pr-2">
        {'< Projects />'}
        </h1>
        <hr />
        <p className="text-center text-xl py-8 font-bold">These are some of my projects</p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={defaultImg} title="App One" description="ReactJS, Express, MongoDB, Mongoose, JWT, and other stuff here to mention....." repo="http://www.github.com/tonybalde" live="http://www.yahoo.com" />
            <ProjectItem img={defaultImg} title="App Two"/>
            <ProjectItem img={defaultImg} title="App Three"/>
            <ProjectItem img={defaultImg} title="App Four"/>
        </div>
        <a href="/moreprojects">
          <p className="flex justify-center m-auto mt-12 gap-2 custom-width text-center p-3 rounded-lg bg-blue-500 text-white text-xl font-bold cursor-pointer hover:text-black ease-in duration-300">More Projects</p>
        </a>
    </div>
  )
}

export default Projects