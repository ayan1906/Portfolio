import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Copy,
  Check,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  Layers,
  Zap,
  Flame,
  Sliders,
  Eye,
  Smartphone,
  Monitor,
  CheckCircle2,
  Sparkles,
  Code2,
  Globe,
  Lock,
  Share2,
  FolderGit2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectsData, getProjectById, getAdjacentProjects } from "@/data/projectsData";
import { fadeUp, stagger, viewport } from "@/components/motionVariants";

// Map string icon names to Lucide icon components
const iconMap = {
  Calendar: Calendar,
  ShieldCheck: ShieldCheck,
  Sliders: Sliders,
  Layers: Layers,
  Eye: Eye,
  Smartphone: Smartphone,
  Flame: Flame,
  Zap: Zap,
  User: User,
  CheckCircle2: CheckCircle2,
  Monitor: Monitor,
  Sparkles: Sparkles,
  FolderGit2: FolderGit2,
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Scroll to top when project ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const project = getProjectById(id);
  const { prev, next } = getAdjacentProjects(project?.id);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // 404 - Project Not Found state
  if (!project) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative max-w-md rounded-2xl border border-white/10 bg-[#100D1A]/80 p-8 backdrop-blur-xl"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
            <FolderGit2 size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white">Project Not Found</h2>
          <p className="mt-3 text-sm text-gray-400">
            The project you are looking for does not exist or has been moved.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/project"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:shadow-lg hover:shadow-purple-500/25"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-300 hover:bg-white/10"
            >
              Go to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Related projects (excluding current project)
  const relatedProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="relative min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      {/* Background Ambience Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-full -translate-x-1/2 max-w-6xl rounded-full bg-gradient-to-b from-purple-600/15 via-cyan-500/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Navigation Breadcrumb Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 text-sm"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <Link
              to="/project"
              className="group inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to All Projects
            </Link>
            <span className="text-gray-600">/</span>
            <span className="font-medium text-purple-300">{project.name}</span>
          </div>

          {/* Action buttons on top bar */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
              title="Copy link to project"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={14} />
                  <span>Share</span>
                </>
              )}
            </button>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
            >
              <FaGithub size={13} />
              <span>GitHub</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-3.5 py-1.5 text-xs font-medium text-white shadow-sm transition hover:shadow-purple-500/20"
            >
              <span>Live Site</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </motion.div>

        {/* Hero Header Section */}
        <motion.div
          variants={stagger(0.12, 0.1)}
          initial="hidden"
          animate="show"
          className="mb-10"
        >
          {/* Badges */}
          <motion.div
            variants={fadeUp}
            className="mb-4 flex flex-wrap items-center gap-2.5"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              {project.status}
            </span>

            <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
              {project.category}
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
              {project.timeline}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
              {project.name}
            </span>
          </motion.h1>

          {/* Subtitle / Tagline */}
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-3xl text-base font-normal leading-relaxed text-gray-300 sm:text-lg md:text-xl"
          >
            {project.tagline}
          </motion.p>

          {/* Quick Meta Stats Grid */}
          <motion.div
            variants={fadeUp}
            className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          >
            <div className="rounded-xl border border-white/5 bg-[#120D20]/70 p-3.5 backdrop-blur-sm">
              <p className="flex items-center gap-1.5 text-xs text-gray-400">
                <User size={13} className="text-purple-400" /> My Role
              </p>
              <p className="mt-1 text-sm font-semibold text-white">{project.role}</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-[#120D20]/70 p-3.5 backdrop-blur-sm">
              <p className="flex items-center gap-1.5 text-xs text-gray-400">
                <Calendar size={13} className="text-cyan-400" /> Timeline
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {project.timeline} ({project.duration})
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-[#120D20]/70 p-3.5 backdrop-blur-sm">
              <p className="flex items-center gap-1.5 text-xs text-gray-400">
                <Globe size={13} className="text-fuchsia-400" /> Client / Scope
              </p>
              <p className="mt-1 truncate text-sm font-semibold text-white">
                {project.client}
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-[#120D20]/70 p-3.5 backdrop-blur-sm">
              <p className="flex items-center gap-1.5 text-xs text-gray-400">
                <Code2 size={13} className="text-emerald-400" /> Core Tech
              </p>
              <p className="mt-1 truncate text-sm font-semibold text-white">
                {project.skills.slice(0, 2).join(", ")}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Browser Mockup Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group relative mb-12 overflow-hidden rounded-2xl border border-white/10 bg-[#0e0a18] shadow-2xl shadow-purple-950/40"
        >
          {/* Browser Window Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#161026]/90 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>

            <div className="flex max-w-md flex-1 items-center justify-center px-4">
              <div className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-400">
                <Lock size={11} className="text-emerald-400" />
                <span className="truncate">{project.live}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open live site in new tab"
                className="rounded p-1 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Image & Interactive Hover Overlay */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0a0712]">
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Gradient bottom shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a18] via-transparent to-transparent opacity-60" />

            {/* Floating Action Button on Bottom Corner */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 sm:bottom-6 sm:right-6">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2.5 text-xs font-semibold text-white shadow-xl shadow-purple-950/60 backdrop-blur-md transition-all hover:scale-105 hover:from-violet-500 hover:to-purple-500 sm:text-sm"
              >
                <span>Explore Live Website</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Metrics Bar */}
        {project.metrics && project.metrics.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#120D20]/80 p-5 text-center transition-all duration-300 hover:border-purple-500/40 hover:bg-[#18112b]"
              >
                <div className="pointer-events-none absolute -top-12 -left-12 h-24 w-24 rounded-full bg-purple-500/10 blur-xl group-hover:bg-purple-500/20" />
                <p className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 via-purple-300 to-fuchsia-400 bg-clip-text sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-gray-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Main Content: 2-Column Grid on Desktop */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Deep Dive (8 Cols) */}
          <div className="flex flex-col gap-12 lg:col-span-8">
            {/* Overview & Story */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="rounded-2xl border border-white/10 bg-[#100D1A]/80 p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-purple-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
                <Sparkles size={14} />
                Project Vision & Overview
              </div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                The Story Behind {project.name}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-300">
                {project.overview}
              </p>
              {project.story && (
                <div className="mt-6 border-l-2 border-purple-500/60 pl-4">
                  <p className="text-sm italic leading-relaxed text-gray-400">
                    "{project.story}"
                  </p>
                </div>
              )}
            </motion.section>

            {/* Key Features */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    <Zap size={14} />
                    Feature Highlights
                  </div>
                  <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    Key Features & Capabilities
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.features.map((feature, idx) => {
                  const IconComponent = iconMap[feature.icon] || Sparkles;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="group flex flex-col rounded-xl border border-white/10 bg-[#100D1A]/70 p-5 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#150f25]"
                    >
                      <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300 transition-colors group-hover:bg-purple-500 group-hover:text-white">
                        <IconComponent size={20} />
                      </div>
                      <h3 className="text-base font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Engineering Challenges & Solutions */}
            {project.challenges && project.challenges.length > 0 && (
              <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="rounded-2xl border border-white/10 bg-[#100D1A]/80 p-6 backdrop-blur-xl sm:p-8"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-fuchsia-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-fuchsia-300">
                  <ShieldCheck size={14} />
                  Problem Solving
                </div>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Technical Challenges & How I Solved Them
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  Real engineering hurdles encountered during the development lifecycle and the tailored solutions implemented.
                </p>

                <div className="mt-6 flex flex-col gap-5">
                  {project.challenges.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/5 bg-[#140E24]/70 p-5 transition hover:border-purple-500/30"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-xs font-bold text-rose-300">
                          !
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-rose-200">
                            The Challenge:
                          </p>
                          <p className="mt-1 text-sm text-gray-300">
                            {item.challenge}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-start gap-3 border-t border-white/5 pt-4">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">
                          ✓
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-emerald-300">
                            The Solution:
                          </p>
                          <p className="mt-1 text-sm text-gray-300">
                            {item.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Architecture & Engineering Details */}
            {project.architecture && (
              <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="rounded-2xl border border-white/10 bg-[#100D1A]/80 p-6 backdrop-blur-xl sm:p-8"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  <Layers size={14} />
                  Architecture & Codebase
                </div>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Architecture & Design Pattern
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {project.architecture}
                </p>
              </motion.section>
            )}
          </div>

          {/* Right Column: Sticky Sidebar Info & Actions (4 Cols) */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <div className="sticky top-28 flex flex-col gap-6">
              {/* Quick Actions Card */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="rounded-2xl border border-white/10 bg-[#100D1A]/90 p-6 shadow-xl backdrop-blur-xl"
              >
                <h3 className="text-base font-bold text-white">Project Actions</h3>
                <p className="mt-1 text-xs text-gray-400">
                  Test the live production deployment or audit the source code.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition hover:shadow-purple-500/30"
                  >
                    <span>Open Live Application</span>
                    <ArrowUpRight size={17} />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-purple-400/50 hover:bg-white/10"
                  >
                    <FaGithub size={17} />
                    <span>View GitHub Repository</span>
                  </motion.a>

                  <button
                    onClick={handleCopyLink}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-medium text-gray-300 transition hover:bg-white/10"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400">Link copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Share / Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Technologies Breakdown */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="rounded-2xl border border-white/10 bg-[#100D1A]/90 p-6 backdrop-blur-xl"
              >
                <h3 className="text-base font-bold text-white">Technologies Used</h3>
                <p className="mt-1 text-xs text-gray-400">
                  Tools, libraries, and frameworks integrated into this project.
                </p>

                {/* Frontend stack */}
                {project.techStack?.frontend && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                      Frontend & UI
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.techStack.frontend.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-xs text-purple-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Backend stack */}
                {project.techStack?.backend && project.techStack.backend.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                      Backend & APIs
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.techStack.backend.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tools & DevOps */}
                {project.techStack?.tools && project.techStack.tools.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                      Build & Deployment
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.techStack.tools.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Hire / Collaborate Call to Action */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/30 via-[#100D1A] to-cyan-950/20 p-6 text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300">
                  <Sparkles size={22} />
                </div>
                <h4 className="text-base font-bold text-white">
                  Need a similar project?
                </h4>
                <p className="mt-1.5 text-xs text-gray-300">
                  I can design and engineer responsive web applications tailored to your business needs.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-purple-500"
                >
                  <span>Let's Discuss Your Project</span>
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Project Pagination (Prev & Next Project) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 border-t border-white/10 pt-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Prev Project */}
            {prev ? (
              <Link
                to={`/project/${prev.id}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#100D1A]/80 p-4 transition-all duration-300 hover:border-purple-500/50 hover:bg-[#140e24]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-colors group-hover:border-purple-400 group-hover:bg-purple-500 group-hover:text-white">
                  <ArrowLeft size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-medium text-gray-400">Previous Project</p>
                  <p className="truncate text-base font-bold text-white transition group-hover:text-purple-300">
                    {prev.name}
                  </p>
                  <p className="truncate text-xs text-gray-500">{prev.category}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {/* Next Project */}
            {next && (
              <Link
                to={`/project/${next.id}`}
                className="group flex items-center justify-end gap-4 rounded-2xl border border-white/10 bg-[#100D1A]/80 p-4 text-right transition-all duration-300 hover:border-purple-500/50 hover:bg-[#140e24]"
              >
                <div className="overflow-hidden">
                  <p className="text-xs font-medium text-gray-400">Next Project</p>
                  <p className="truncate text-base font-bold text-white transition group-hover:text-purple-300">
                    {next.name}
                  </p>
                  <p className="truncate text-xs text-gray-500">{next.category}</p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-colors group-hover:border-purple-400 group-hover:bg-purple-500 group-hover:text-white">
                  <ArrowRight size={18} />
                </div>
              </Link>
            )}
          </div>
        </motion.div>

        {/* Other Projects Showcase Grid */}
        {relatedProjects.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-16 border-t border-white/10 pt-10"
          >
            <div className="mb-8 flex flex-col items-center text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
                Keep Exploring
              </span>
              <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                More Featured Projects
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#100D1A]/90 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-950/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#161026]">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100D1A] via-transparent to-transparent opacity-60" />
                    <span className="absolute top-3 right-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-0.5 text-[11px] font-medium text-white backdrop-blur-md">
                      {p.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="text-lg font-bold text-white group-hover:text-purple-300">
                      {p.name}
                    </h4>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-400">
                      {p.overview}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.skills.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-gray-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-3 text-xs font-medium text-purple-400">
                      <span>View Case Study</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
