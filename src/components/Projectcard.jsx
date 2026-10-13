import React from 'react'
import {

    FaGithub,
} from "react-icons/fa";
import { CircleArrowOutUpRight } from 'lucide-react'

const Projectcard = () => {
    const projectdata = [
        {
            image: '/images/Project/movieexplore.png',
            name: 'Movie Explorer',
            text: 'A movie search app built with React and Tailwind CSS to explore and discover movies.',
            skill: [
                'React',
                'Tailwind CSS'
            ],
            code: 'https://github.com/ayan1906/Movieexplore',
            live: 'https://ayan1906.github.io/Movieexplore/'
        },
        {
            image: '/images/Project/cpiict.png',
            name: 'CPI ICT Club',
            text: 'A responsive website for the CPI ICT Club, built with HTML, Tailwind CSS, and JavaScript.',
            skill: [
                'HTML',
                'Tailwind CSS',
                'JavaScript'
            ],
            code: 'https://github.com/ayan1906/cpi-ict',
            live: 'https://cpi-ict-club1.vercel.app/'
        },
    ];

    return (
        <div>

            <div className='mb-14 flex flex-col items-center text-center'>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">

                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                        Projects
                    </span>
                </h2>
            </div>
            <div className='justify-around grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                {projectdata.map((project, index) => (

                    <div key={index} className='mx-auto w-80 rounded-xl bg-[#100D1A] border border-[#100D1A] hover:border-violet-700 hover:scale-102 transition duration-300'>
                        <img src={project.image} alt="" className=' h-56 p-3 rounded-3xl' />
                        <h1 className='text-xl font-bold ml-4'>{project.name}</h1>
                        <p className='text-sm ml-4 my-4 text-slate-400'>{project.text}</p>
                        <div className='flex justify-center gap-4 '>
                            {project.skill.map((skil) => (
                                <button className=' bg-[#1f1730] text-sm rounded-full px-3 py-1 gap-3' >{skil}</button>
                            ))}
                        </div>
                        <div className='webdemo flex items-center justify-around my-6'>
                            <a className='flex items-center justify-center border border-violet-700 rounded-full px-4 py-2 text-sm gap-2 hover:bg-violet-700  transition duration-300' href="">Code <FaGithub /></a>
                            <a className='flex items-center justify-center border border-violet-700 rounded-full px-4 py-2 text-sm gap-2 hover:bg-violet-700  transition duration-300' href="">View Site <CircleArrowOutUpRight className='w-4 h-4' /></a>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Projectcard