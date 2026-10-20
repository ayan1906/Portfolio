import { fadeUp, viewport } from "./motionVariants";
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { motion } from 'motion/react';
import { CircleArrowOutUpRight } from 'lucide-react';

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
        {
            image: '/images/Project/flowflix.png',
            name: 'FlowFlix',
            text: 'A streaming platform for browsing and watching movies and TV shows.',
            skill: [
                'React',
                'Tailwind CSS',
                'Firebase Auth',
                'React Router',
                'Lucide Icons',
            ],
            code: 'https://github.com/ayan1906/Moviebox',
            live: 'https://flowflix-jet.vercel.app/'
        },
    ];

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <motion.div 
                variants={fadeUp} 
                initial="hidden" 
                whileInView="show" 
                viewport={viewport} 
                className='mb-14 flex flex-col items-center text-center'
            >
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                        Projects
                    </span>
                </h2>
            </motion.div>

            <div className='w-full grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 justify-items-center'>
                {projectdata.map((project, index) => (
                    <motion.div 
                        variants={fadeUp} 
                        custom={index} 
                        initial="hidden" 
                        whileInView="show" 
                        viewport={viewport} 
                        whileHover={{ y: -8, scale: 1.02 }} 
                        key={index} 
                        className='w-full max-w-sm mb-6 rounded-2xl bg-[#100D1A] border border-[#1f1730] hover:border-violet-700 transition-colors duration-300 flex flex-col overflow-hidden shadow-xl'
                    >
                        {/* Project Image */}
                        <div className="w-full h-52 overflow-hidden p-3">
                            <img 
                                src={project.image} 
                                alt={project.name} 
                                className='w-full h-full object-cover rounded-xl' 
                            />
                        </div>

                        {/* Card Content Area */}
                        <div className='px-5 flex flex-col flex-grow'>
                            <h1 className='text-xl font-bold text-white mt-2'>{project.name}</h1>
                            <p className='text-sm my-3 text-slate-400 flex-grow'>{project.text}</p>

                            {/* Skills Tag Cloud */}
                            <div className='flex flex-wrap gap-2 my-2'>
                                {project.skill.map((skil, skillIndex) => (
                                    <span 
                                        key={skillIndex} 
                                        className='bg-[#1f1730] text-xs font-medium text-purple-300 rounded-full px-3 py-1 border border-purple-900/30'
                                    >
                                        {skil}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className='webdemo flex items-center justify-between gap-3 my-6 pt-2 border-t border-white/5'>
                                <motion.a 
                                    whileHover={{ scale: 1.05 }} 
                                    whileTap={{ scale: 0.95 }} 
                                    className='flex-1 flex items-center justify-center border border-violet-700/60 rounded-full px-4 py-2 text-sm font-medium text-white gap-2 hover:bg-violet-700 transition-colors duration-300' 
                                    href={project.code} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Code <FaGithub />
                                </motion.a>
                                <motion.a 
                                    whileHover={{ scale: 1.05 }} 
                                    whileTap={{ scale: 0.95 }} 
                                    className='flex-1 flex items-center justify-center border border-violet-700/60 rounded-full px-4 py-2 text-sm font-medium text-white gap-2 hover:bg-violet-700 transition-colors duration-300' 
                                    href={project.live} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    View Site <CircleArrowOutUpRight className='w-4 h-4' />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projectcard;