import { AnimatePresence, motion } from "motion/react";
import { fadeUp, viewport } from "./motionVariants";
import { useState, useEffect } from 'react'
import {
    ArrowRight
} from "lucide-react";

const Gallary = () => {
    const [click, setclick] = useState(null)


    const gallarydata = [
        {
            tag: "Community Service",
            image: '/images/camp.jpg',
            head: "Free Medical Health Camp",
            text: "Organized a Free medical Camp in Collaboration of Leo Club. Providing Blood presure Check , Eye Checkup , Diabetes Testing Service For the community"
        },

    ]
    return (
        <div className='my-6'>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="px-6 my-8">
                <h4 className='text-[#d328d3] font-bold'>Visual Archive</h4>
                <h1 className="text-2xl font-bold mb-8">Gallery & Moments</h1>
                <hr className="w-full border-white/20" />
            </motion.div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 mt-6 ml-8'>
                {gallarydata.map((data, i) => (
                    <motion.div key={data.head} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={viewport} whileHover={{ scale: 1.02 }} className='flex flex-col bg-[#0E1324] border border-[#0E1324] rounded-2xl hover:border-purple-700 transition-colors duration-300 '>
                        <img src={data.image} alt={data.head} className='border-12 flex justify-start   rounded-2xl  border-[#0d0a16] ' />
                        <p className='w-36 mt-2 mx-3 pl-2 text-xs font-bold text-green-500 border border-green-600 rounded-full'>{data.tag}</p>
                        <h1 className='font-bold p-6'>{data.head}</h1>
                        <hr className="w-full border-white/20" />

                        <button onClick={() => { setclick(data) }} className='group flex items-center text-start gap-2 p-4 text-sm cursor-pointer text-violet-400 '>See Full View
                            <ArrowRight className='h-4 w-4 group-hover:translate-x-1.5 transition duration-300' /></button>
                    </motion.div>
                ))}
                <AnimatePresence>
                {click && (
                    <motion.div key="gallery-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setclick(null)}
                    >
                        <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }} transition={{ type: "spring", stiffness: 300, damping: 26 }}
                            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-lg w-full relative shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()} // ভেতরের ক্লিকে বন্ধ হওয়া আটকায়
                        >
                            <button
                                onClick={() => setclick(null)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer transition duration-150"
                            >
                                ✕
                            </button>

                            <div className="flex flex-col  gap-5 items-center sm:items-start">
                                <img src={click.image} alt="" />
                                <p className=' px-1 text-xs font-bold text-green-500 border border-green-600 rounded-full'>{click.tag}</p>
                                <h1 className="text-white font-bold">{click.head}</h1>
                                <p className='text-[12px] text-slate-300'>{click.text}</p>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Gallary