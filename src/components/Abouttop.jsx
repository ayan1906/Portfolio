import { motion } from "motion/react";
import { EASE, fadeUp, stagger, viewport } from "./motionVariants";
import React from "react";
import {
    Code2,
    ArrowDown,
    Target,
    Telescope,
    Sparkles, CodeXml, SquareTerminal, BrainCircuit,
    Square
} from "lucide-react";
import Card from "./Card";
// bg, logo, name, text
const Abouttop = () => {
    const focus = [
        {
            logo: <CodeXml />,
            name: "Web Development",
            text: 'Developing Clean , Fast, Responsive UI with Clean architectures and smooth user experience'
        },
        {
            logo: <SquareTerminal />,
            name: "Prompt Engineering",
            text: "Exploring effective prompting techniques to get better results from AI tools and improve creativity, productivity, and problem-solving.",

        },
        {
            logo: <BrainCircuit />,
            name: "Machine Learning",
            text: "Learning Python, machine learning concepts, and AI technologies to build intelligent solutions for real-world problems.",

        },
    ]
    return (
        <div>
            <section className="relative overflow-hidden px-5 py-10 sm:px-8 lg:flex lg:min-h-[calc(100vh-80px)] lg:items-center lg:px-12 lg:py-8">

                {/* Background glow */}
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute left-0 top-1/4 -z-10 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute bottom-0 right-0 -z-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

                <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-14">

                    {/* Profile Image */}
                    <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewport} transition={{ duration: 1.2, ease: EASE }} className="group relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[370px]">

                        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-purple-500/25 to-fuchsia-500/20 opacity-70 blur-xl transition duration-500 group-hover:opacity-100" />

                        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#100c1a] p-2">
                            <img
                                src="/images/about.jpg"
                                alt="Sakin Arshad Ayan"
                                className="aspect-[4/5] max-h-[55vh] w-full rounded-[1.25rem] object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                            />
                        </div>

                        {/* Floating badge */}
                        <motion.div initial={{ opacity: 0, scale: 0.7, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, delay: 0.8, ease: EASE } }} viewport={viewport} whileHover={{ scale: 1.05 }} className="absolute -bottom-4 -right-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#110d1b]/95 p-3 shadow-xl backdrop-blur-xl sm:-right-5 sm:p-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
                                <Code2 size={22} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-white">
                                    Developer & Designer
                                </p>
                                <p className="mt-1 text-xs text-gray-400">
                                    Code · Design · Create
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* About Content */}
                    <motion.div variants={stagger(0.12, 0.1)} initial="hidden" whileInView="show" viewport={viewport} className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">

                        <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-indigo-300">
                            <Sparkles size={15} />
                            ABOUT ME
                        </motion.span>

                        <motion.p variants={fadeUp} className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                            Hello, I'm
                        </motion.p>

                        <motion.h1 variants={fadeUp} className="mt-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-5xl">
                            Sakin Arshad Ayan
                        </motion.h1>

                        <motion.p variants={fadeUp} className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                            I'm a frontend developer and graphic designer passionate
                            about creating clean, engaging, and user-friendly digital
                            experiences. I'm also learning Machine Learning to explore
                            how intelligent technology can solve real-world problems.
                        </motion.p>

                        {/* Mission & Vision Cards */}
                        <motion.div variants={fadeUp} className="mt-7 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">

                            {/* Mission */}
                            <div className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-white/[0.03] p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/[0.05]">
                                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300 transition group-hover:scale-110">
                                    <Target size={22} />
                                </div>

                                <h2 className="mb-2 text-lg font-semibold text-white">
                                    My Mission
                                </h2>

                                <p className="text-sm leading-6 text-gray-400">
                                    To build modern, accessible, and user-friendly web
                                    experiences while improving my development and
                                    problem-solving skills. I aim to combine creativity
                                    with technology to create meaningful digital solutions.
                                </p>

                                <div className="absolute bottom-0 left-5 h-[2px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-12" />
                            </div>

                            {/* Vision */}
                            <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/[0.03] p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/[0.05]">
                                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 transition group-hover:scale-110">
                                    <Telescope size={22} />
                                </div>

                                <h2 className="mb-2 text-lg font-semibold text-white">
                                    My Vision
                                </h2>

                                <p className="text-sm leading-6 text-gray-400">
                                    To become a skilled Software and Machine Learning
                                    Engineer, building intelligent, impactful, and
                                    user-centered applications that solve real-world
                                    problems by bridging web development and AI.
                                </p>

                                <div className="absolute bottom-0 left-5 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-12" />
                            </div>

                        </motion.div>

                        {/* CTA */}
                        <motion.div variants={fadeUp} className="mt-7 flex justify-center lg:justify-start">
                            <motion.a whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }}
                                href="#my-journey"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition-shadow duration-300 hover:shadow-purple-500/20"
                            >
                                More About Me
                                <ArrowDown size={17} />
                            </motion.a>
                        </motion.div>

                    </motion.div>
                </div>
            </section>


            <div id="my-journey" className="flex flex-col items-center my-6">
                <motion.h1 variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="text-3xl font-bold">What I Focus on</motion.h1>
                <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="text-slate-300 text-sm">Core pillars that drive my growth and passion.</motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    {focus.map((data, i) => (
                        <Card key={data.name} index={i} logo={data.logo} name={data.name} text={data.text} />
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default Abouttop;