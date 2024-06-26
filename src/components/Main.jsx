import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn, FaEnvelope, FaFileDownload, FaGithub } from "react-icons/fa"
import wavingHand from '../assets/waving-hand.gif'

function Main() {
  return (
    <div id="main">
      <img className="w-full h-screen object-cover object-left scale-x-[-1] " src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                <img src="tony.jpg" alt="Tony Baldessari" className="profile-img border-black border-4" />
                {/* <h1 className="sm:text-5xl text-4xl font-bold text-black text-center title-txt">Hi! 👋 I'm Tony Baldessari</h1> */}
                <div className="flex flex-row items-center justify-center">
                  <h1 className="sm:text-5xl text-4xl font-bold text-black title-txt">Hi! <img src={wavingHand} alt="Waving Hand" className="h-16 w-16 ml-2"/>I'm Tony Baldessari</h1>
                </div>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-black typing">
                I'm a
                <TypeAnimation
                    sequence={[
                    "Front-End Developer", // Types 'One'
                    1000, // Waits 1s
                    "Coder", // Deletes 'One' and types 'Two'
                    1000, // Waits 2s
                    "Tech Enthusiast",
                    1000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: "1em", paddingLeft: '5px' }}
                />
                </h2>
                <p className="flex sm:text-md sm:mx-2 md:mx-0 text-xl m-4 pt-4 text-black custom-text">
                Welcome to my litte corner of the web! I'm based in Buenos Aires, Argentina. 
                I love creating user-friendly websites and web apps.
                </p>
                <div className="flex justify-around gap-2 pt-4 align-center socials"> {/* Here are the Social */}
                    <a href="http://www.linkedin.com/in/antonio-baldessari" target="_blank"><FaLinkedinIn className="cursor-pointer hover:scale-110 transition ease-in" size={20}/></a>
                    <a href="http://www.github.com/tonybalde" target="_blank"><FaGithub className="cursor-pointer hover:scale-110 transition ease-in" size={20}/></a>
                    <a href="mailto:tonybaldessari@outlook.com" target="_blank" className="flex gap-2"><FaEnvelope className="cursor-pointer hover:scale-110 transition ease-in" size={20}/>tonybaldessari@outook.com</a>
                </div>
                <div className="border-2 border-black rounded-xl items-center bg-blue-500 text-black font-bold pl-2 pr-2 pt-2 pb-2 mt-4">
                  <a href="Resume-Tony-Baldessari.pdf" target="_blank" className="flex gap-2"><FaFileDownload  className="cursor-pointer hover:scale-110 transition ease-in" size={20}/>Download Resume</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Main