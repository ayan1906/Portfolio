import { motion } from "motion/react";
import { EASE, fadeUp, stagger } from "@/components/motionVariants";
import { NavLink } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  CodeXml,
  Palette,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Dservice from "@/components/Dservice";
import Contact from "@/components/Contact";

const socialMedia = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/Iamayan1906",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/i_am_ayan19/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/ayan1906",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/sakin-ayan-a7953b346/",
  },
];

const MotionNavLink = motion.create(NavLink);

const Home = () => {
  return (
    <div>
      <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-5 py-12 sm:px-8 lg:px-12">
      {/* Background glow */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute left-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left side: Introduction */}
        <motion.div variants={stagger(0.15, 0.2)} initial="hidden" animate="show" className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">

          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <Sparkles size={16} />
            <span>Welcome to my portfolio</span>
          </motion.div>

          <motion.p variants={fadeUp} className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
            Hello, I'm
          </motion.p>

          <motion.h1 variants={fadeUp} className="font-sans text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Sakin Arshad
            <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Ayan.
            </span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-3 py-2 text-sm text-indigo-300">
              <CodeXml size={17} />
              Frontend Developer
            </span>

            <span className="inline-flex items-center gap-2 rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-2 text-sm text-purple-300">
              <Palette size={17} />
              UI/UX Enthausiast
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            I build modern, responsive, and user-friendly web experiences
            with a focus on clean design and smooth interactions.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <MotionNavLink
              whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }}
              to="/project"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-purple-900/20 transition-shadow duration-300 hover:shadow-purple-500/25"
            >
              My CV
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </MotionNavLink>

            <MotionNavLink
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-gray-200 transition-colors duration-300 hover:border-purple-400/40 hover:bg-purple-500/10"
            >
              Contact Me
              <ArrowUpRight size={18} />
            </MotionNavLink>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
            <span className="mr-1 text-sm text-gray-500">Find me on</span>

            {socialMedia.map(({ name, icon: Icon, link }, i) => (
              <motion.a initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1, transition: { delay: 1.4 + i * 0.12, type: "spring", stiffness: 260, damping: 18 } }} whileHover={{ y: -4, scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 15 } }} whileTap={{ scale: 0.9 }}
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-colors duration-300 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
              >
                <Icon size={19} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side: Profile image */}
        <motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: EASE, delay: 0.3 }} className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="group relative w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[440px]">

            {/* Glow behind image */}
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-purple-500/30 to-fuchsia-500/20 opacity-70 blur-2xl transition duration-500 group-hover:opacity-100" />

            {/* Image frame */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-2 shadow-2xl shadow-purple-950/30">
              <img
                src="/images/home.jpg"
                alt="Sakin Arshad Ayan"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center transition duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Floating badge */}
            <motion.div initial={{ opacity: 0, scale: 0.7, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, delay: 1.3, ease: EASE } }} whileHover={{ scale: 1.05 }} className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#110d1b]/95 p-4 shadow-xl backdrop-blur-xl sm:-left-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 text-purple-300">
                <CodeXml size={23} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Creative Developer
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Code · Design · Create
                </p>
              </div>
            </motion.div>

            {/* Decorative circle */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -right-3 -top-3 -z-10 h-20 w-20 rounded-2xl border border-purple-400/20 sm:-right-5 sm:-top-5 sm:h-24 sm:w-24" />
          </div>
        </motion.div>

      </div>
      
    </section>
    <Dservice/>

    <section id="contact">
      <Contact/>
    </section>
    </div>
  );
};

export default Home;