import React from "react";
import { motion } from "motion/react";
import { fadeUp, viewport } from "./motionVariants";

// `index` is optional - pass it from .map() so cards reveal one after another
const Card = ({ bg, logo, name, text, index = 0 }) => {
    return (
        <motion.div
            variants={fadeUp}
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            whileHover={{ y: -8 }}
            className="group relative h-full w-full max-w-sm overflow-hidden rounded-2xl border border-purple-500/20 bg-[#0d0a16] p-7 transition-[border-color,box-shadow] duration-300 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10"
        >

            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-purple-600/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

            <div
                className={`relative mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-500/20 to-indigo-500/10 text-purple-300 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300 ${bg || ""}`}
            >
                <span className="text-2xl">{logo}</span>
            </div>


            <h3 className="relative mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-purple-300">
                {name}
            </h3>

            <p className="relative text-sm leading-7 text-slate-400">
                {text}
            </p>

            <div className="absolute bottom-0 left-7 h-[2px] w-0 0 transition-all duration-300 group-hover:w-16" />

        </motion.div>

    );
};

export default Card;