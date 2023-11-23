import React from 'react'
import WorkItem from './WorkItem'
const data = [
    {
        year: 2020,
        title: "Content Creator",
        duration: "3 years",
        details: "Pariatur quis laboris duis culpa in. Incididunt veniam labore consequat dolor reprehenderit nostrud. Velit anim adipisicing officia mollit dolor ut aliquip aute dolore. Mollit adipisicing duis laborum consequat est amet labore labore laborum consequat cupidatat. Eu consectetur minim nulla reprehenderit pariatur aliquip officia." 
    },
    {
        year: 2017,
        title: "Google",
        duration: "3 years",
        details: "Pariatur quis laboris duis culpa in. Incididunt veniam labore consequat dolor reprehenderit nostrud. Velit anim adipisicing officia mollit dolor ut aliquip aute dolore. Mollit adipisicing duis laborum consequat est amet labore labore laborum consequat cupidatat. Eu consectetur minim nulla reprehenderit pariatur aliquip officia." 
    },
    {
        year: 2015,
        title: "Amazon",
        duration: "2 years",
        details: "Pariatur quis laboris duis culpa in. Incididunt veniam labore consequat dolor reprehenderit nostrud. Velit anim adipisicing officia mollit dolor ut aliquip aute dolore. Mollit adipisicing duis laborum consequat est amet labore labore laborum consequat cupidatat. Eu consectetur minim nulla reprehenderit pariatur aliquip officia." 
    },
    {
        year: 2012,
        title: "Facebook",
        duration: "3 years",
        details: "Pariatur quis laboris duis culpa in. Incididunt veniam labore consequat dolor reprehenderit nostrud. Velit anim adipisicing officia mollit dolor ut aliquip aute dolore. Mollit adipisicing duis laborum consequat est amet labore labore laborum consequat cupidatat. Eu consectetur minim nulla reprehenderit pariatur aliquip officia." 
    },
]

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 class="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
        {data.map((item, idx)=>(
            <WorkItem 
                Key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details}
            />
        ))}
    </div>
  )
}

export default Work