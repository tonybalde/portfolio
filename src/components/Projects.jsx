import React from 'react'
import ProjectItem from './ProjectItem'
import defaultImg from '../assets/default-preview.gif'
import demoonlydevs from '../assets/onlydevsdemo.gif'
import demominimessageboard from '../assets/demominimessageboard.gif'
import demodevcv from '../assets/demodevcv.gif'
import demorobotcard from '../assets/robotcarddemo.gif'


const Projects = () => {
  return (
    <div id="projects" className='w-full m-auto md:pl-20 p-4 py-16 bg-gray-300'> 
        <h1 className="text-4xl font-bold text-center text-black pl-2 pr-2">
        {'< Projects />'}
        <hr className="custom-hr bg-blue-500"/>
        </h1>
        <p className="text-center text-xl py-8 font-bold">These are some of my projects</p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={demoonlydevs} title="Only.Devs" description="ReactJS, Express, MongoDB, Mongoose, JWT, and other stuff here to mention....." repo="http://www.github.com/tonybalde" live="http://www.yahoo.com" />
            <ProjectItem img={demominimessageboard} title="Mini Message Board"/>
            <ProjectItem img={demodevcv} title="Dev.CV"/>
            <ProjectItem img={demorobotcard} title="RobotCards"/>
        </div>
    </div>
  )
}

export default Projects