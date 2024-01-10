import React from 'react'
// Frontend Images
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import bootstrap from '../assets/bootstrap.png';
import tailwindcss from '../assets/tailwindcss.png';
// Backend Images
import nodejs from '../assets/node.png';
import expressjs from '../assets/express.png';
import mongodb from '../assets/mongodb.png';
import mongoose from '../assets/mongoose.png';
import mysql from '../assets/mysql.png';
// Tools
import git from '../assets/git.png';
import github from '../assets/github.png';
import trello from '../assets/trello.png';
import figma from '../assets/figma.png';

const Skills = () => {
  return (
    <div id="skills" className='w-full m-auto md:pl-20 p-4 py-16 bg-slate-200'> 
        <h1 className="text-4xl font-bold text-center text-black pl-2 pr-2">
        {'< Skills />'}
        <hr className="custom-hr bg-blue-500"/>
        </h1>
        <div className="flex gap-8 items-center flex-wrap ">
            <h3 className="text-2xl p-2 font-bold">Front-End</h3>
            <div className="flex p-4 gap-8 justify-center flex-wrap">
              <img src={html} className="tech-icon" alt=""/>
              <img src={css} className="tech-icon" alt=""/>
              <img src={javascript} className="tech-icon" alt=""/>
              <img src={react} className="tech-icon" alt=""/>
              <img src={bootstrap} className="tech-icon" alt=""/>
              <img src={tailwindcss} className="tech-icon" alt=""/>
            </div>
        </div>
        <div className="flex gap-8 items-center flex-wrap ">
            <h3 className="text-2xl p-2 font-bold">Back-End</h3>
            <div className="flex p-4 gap-8 justify-center flex-wrap">
              <img src={nodejs} className="tech-icon" alt=""/>
              <img src={expressjs} className="tech-icon" alt=""/>
              <img src={mongodb} className="tech-icon" alt=""/>
              <img src={mongoose} className="tech-icon" alt=""/>
              <img src={mysql} className="tech-icon" alt=""/>
            </div>
        </div>
        <div className="flex gap-8 items-center flex-wrap ">
            <h3 className="text-2xl p-2 font-bold">Tools</h3>
            <div className="flex p-4 gap-8 justify-center flex-wrap">
              <img src={git} className="tech-icon" alt=""/>
              <img src={github} className="tech-icon" alt=""/>
              <img src={trello} className="tech-icon" alt=""/>
              <img src={figma} className="tech-icon" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Skills