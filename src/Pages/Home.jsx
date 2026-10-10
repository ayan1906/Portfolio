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

const Home = () => {
  return (
    <div>
      <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-5 py-12 sm:px-8 lg:px-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left side: Introduction */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <Sparkles size={16} />
            <span>Welcome to my portfolio</span>
          </div>

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
            Hello, I'm
          </p>

          <h1 className="font-sans text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Sakin Arshad
            <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Ayan.
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-3 py-2 text-sm text-indigo-300">
              <CodeXml size={17} />
              Frontend Developer
            </span>

            <span className="inline-flex items-center gap-2 rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-2 text-sm text-purple-300">
              <Palette size={17} />
              Graphic Designer
            </span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            I build modern, responsive, and user-friendly web experiences
            with a focus on clean design and smooth interactions.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <NavLink
              to="/project"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-purple-900/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/25"
            >
              My CV
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </NavLink>

            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-gray-200 transition duration-300 hover:border-purple-400/40 hover:bg-purple-500/10"
            >
              Contact Me
              <ArrowUpRight size={18} />
            </NavLink>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-4">
            <span className="mr-1 text-sm text-gray-500">Find me on</span>

            {socialMedia.map(({ name, icon: Icon, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        {/* Right side: Profile image */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
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
            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#110d1b]/95 p-4 shadow-xl backdrop-blur-xl sm:-left-8">
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
            </div>

            {/* Decorative circle */}
            <div className="absolute -right-3 -top-3 -z-10 h-20 w-20 rounded-2xl border border-purple-400/20 sm:-right-5 sm:-top-5 sm:h-24 sm:w-24" />
          </div>
        </div>

      </div>
      
    </section>
    <Dservice/>
    </div>
  );
};

export default Home;