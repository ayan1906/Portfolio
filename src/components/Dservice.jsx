import { motion } from "motion/react";
import { fadeUp, stagger, viewport } from "./motionVariants";
import React from 'react'
import Card from './Card'
import {
    CodeXml,
    Palette,
} from "lucide-react";
const Dservice = () => {

    const ds = [
        {
            logo: <CodeXml />,
            name: 'Web Development',
            text: "Custom Responsive website , Web App , Frontend UI ,E-commerce Application",
            bg: '#1B1D49',
        },
        {
            logo: <Palette />,
            name: 'UI/UX Enthausiast',
            text: "Clean UI , Responsive Design",
            bg: '#1B1D49'

        },

    ]
    return (
        <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12">

            {/* Background glow */}
            <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute left-1/2 top-20 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px]" />

            <div className="mx-auto max-w-6xl">

                {/* Section Heading */}
                <motion.div variants={stagger(0.12, 0)} initial="hidden" whileInView="show" viewport={viewport} className="mb-14 flex flex-col items-center text-center">

                    <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-indigo-300">
                        WHAT I OFFER
                    </motion.span>

                    <motion.h2 variants={fadeUp} className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Digital{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Services
                        </span>
                    </motion.h2>

                    <motion.p variants={fadeUp} className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                        I create modern digital experiences by combining creative design
                        with clean, functional code.
                    </motion.p>

                    
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

                    {ds.map((service, i) => (
                        <Card
                            key={service.name}
                            index={i}
                            logo={service.logo}
                            name={service.name}
                            text={service.text}
                        />
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Dservice