import { motion } from "motion/react";
import { fadeUp, stagger } from "./motionVariants";

import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const MotionLink = motion.create(Link);

const Notfound = () => {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080B18] px-5 text-white">

            {/* Background Glow */}
            <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

            <motion.div variants={stagger(0.12)} initial="hidden" animate="show" className="relative z-10 text-center">

                <motion.p variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
                    Error 404
                </motion.p>

                <motion.h1 variants={fadeUp} className="text-8xl font-black tracking-tighter sm:text-9xl">
                    <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                        404
                    </span>
                </motion.h1>

                <motion.h2 variants={fadeUp} className="mt-6 text-2xl font-bold sm:text-3xl">
                    Page Not Found
                </motion.h2>

                <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                    Oops! The page you're looking for doesn't exist
                    or may have been moved.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">

                    <MotionLink
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        to="/"
                        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 text-sm font-semibold"
                    >
                        <Home size={17} />
                        Back to Home
                    </MotionLink>

                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-violet-400 hover:text-white"
                    >
                        <ArrowLeft size={17} />
                        Go Back
                    </motion.button>

                </motion.div>

                <motion.p variants={fadeUp} className="mt-12 text-xs tracking-widest text-slate-600">
                    LOST IN THE DIGITAL SPACE?
                </motion.p>

            </motion.div>
        </section>
    );
};

export default Notfound;