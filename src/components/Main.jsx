import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa"

function Main() {
  return (
    <div id="main">
      <img className="w-full h-screen object-cover object-left scale-x-[-1] " src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80" alt="" />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800  ">I'm Tony Baldessari</h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                I'm a
                <TypeAnimation
                    sequence={[
                    "Developer", // Types 'One'
                    2000, // Waits 1s
                    "Coder", // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    "Tech Enthusiast",
                    2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: "1em", paddingLeft: '5px' }}
                />
                </h2>
                <div className="flex justify-between pt-6 max-w-[200px] w-full"> {/* Here are the Social */}
                    <a href="https://www.twitter.com/tonybaldev" target="_blank"><FaTwitter className="cursor-pointer hover:scale-110 transition ease-in" size={20}/></a>
                    <a href="https://www.facebook.com/tonybalde" target="_blank"><FaFacebookF className="cursor-pointer hover:scale-110 transition ease-in" size={20}/></a>
                    <a href="https://www.instagram.com/tonybaldev" target="_blank"><FaInstagram className="cursor-pointer hover:scale-110 transition ease-in" size={20}/></a>
                    <a href="https://www.linkedin.com/in/antonio-baldessari" target="_blank"><FaLinkedinIn className="cursor-pointer hover:scale-110 transition ease-in" size={20}/></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Main