import React from "react";
import { Link } from "react-router-dom";
import { fadeUp, viewport } from "./motionVariants";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import { CircleArrowOutUpRight, ArrowRight, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projectsData";

const Projectcard = () => {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mb-14 flex flex-col items-center text-center"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1 text-xs font-medium text-purple-300">
          <Sparkles size={13} />
          Featured Portfolio Work
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Crafted with{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Passion & Code
          </span>
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
          Click on any project to explore its full case study, architecture, key features, and development challenges.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            whileHover={{ y: -6 }}
            className="group flex w-full max-w-[540px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#100D1A]/90 shadow-lg shadow-purple-950/20 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-950/40"
          >
            {/* Project Image & Link to details */}
            <Link
              to={`/project/${project.id}`}
              className="relative aspect-[20/10] w-full overflow-hidden bg-[#161026]"
              title={`View ${project.name} details`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100D1A] via-transparent to-transparent opacity-60" />

              {/* Category pill */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Status pill */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/70 px-2.5 py-1 text-[11px] font-medium text-emerald-300 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{project.status.split(" ")[0]}</span>
              </div>
            </Link>

            {/* Project Details */}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-2">
                <Link
                  to={`/project/${project.id}`}
                  className="text-xl font-bold text-white transition hover:text-purple-300 sm:text-2xl"
                >
                  {project.name}
                </Link>
                <span className="shrink-0 text-xs font-medium text-gray-500">
                  {project.timeline}
                </span>
              </div>

              <p className="mt-2.5 text-sm leading-relaxed text-gray-300 line-clamp-2">
                {project.overview}
              </p>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                {project.skills.slice(0, 5).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-200"
                  >
                    {skill}
                  </span>
                ))}
                {project.skills.length > 5 && (
                  <span className="rounded-lg bg-white/5 px-2 py-1 text-xs text-gray-400">
                    +{project.skills.length - 5}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-5">
                {/* View Case Study Button */}
                <Link
                  to={`/project/${project.id}`}
                  className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-purple-950/40 transition hover:from-violet-500 hover:to-purple-500 sm:text-sm"
                >
                  <span>View Details</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </Link>

                {/* External Links */}
                <div className="flex items-center gap-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Source Code on GitHub"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300 transition hover:border-purple-400/40 hover:bg-white/10 hover:text-white"
                  >
                    <FaGithub size={14} />
                    <span className="hidden sm:inline">Code</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open Live Preview"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300 transition hover:border-purple-400/40 hover:bg-white/10 hover:text-white"
                  >
                    <span className="hidden sm:inline">Live</span>
                    <CircleArrowOutUpRight size={14} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projectcard;
