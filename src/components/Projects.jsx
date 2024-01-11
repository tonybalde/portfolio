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
            <ProjectItem img={demoonlydevs} title="Only.Devs" description="A full-stack members only app built with NodeJS, Express, MongoDB, Mongoose, PUG and Bootstrap" repo="https://github.com/tonybalde/onlydevs" live="https://onlydevs.adaptable.app" />
            <ProjectItem img={demominimessageboard} title="Mini Message Board" description="A small full-stack mini message board built with NodeJS, Express, MongoDB, Mongoose, PUG, and CSS" repo="https://github.com/tonybalde/mini-message-board" live="https://elegant-pullover-cod.cyclic.app/" />
            <ProjectItem img={demodevcv} title="Dev.CV" description="An app for tailor your developer resume, you can print it or save it as a PDF file, built with ReactJS, JavaScript and CSS" repo="https://github.com/tonybalde/reactcv" live="https://devcv.vercel.app/" />
            <ProjectItem img={demorobotcard} title="RobotCards" description="A memory card game built with ReactJS, JavaScript and CSS" repo="https://github.com/tonybalde/robotcard" live="https://robotcard-self.vercel.app/" />
        </div>
    </div>
  )
}

export default Projects