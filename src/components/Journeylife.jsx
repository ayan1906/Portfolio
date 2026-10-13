
import React from "react";
import { NavLink } from "react-router-dom";
import {
    GraduationCap,
    Code2,
    Users,
    BriefcaseBusiness,
    ArrowUpRight,
    Terminal,
} from "lucide-react";

const Journeylife = () => {
    const highlights = [
        {
            icon: GraduationCap,
            title: "Diploma Student",
            text: "Currently pursuing my Diploma in Engineering.",
            color: "text-cyan-400",
            bg: "bg-cyan-400/10",
        },
        {
            icon: Code2,
            title: "Frontend Developer",
            text: "Building responsive and modern web experiences.",
            color: "text-violet-400",
            bg: "bg-violet-400/10",
        },
        {
            icon: Users,
            title: "ICT Club Secretary",
            text: "Contributing to teamwork, activities, and technology.",
            color: "text-fuchsia-400",
            bg: "bg-fuchsia-400/10",
        },
        {
            icon: BriefcaseBusiness,
            title: "Open to Opportunities",
            text: "Looking forward to my first internship and real-world experience.",
            color: "text-emerald-400",
            bg: "bg-emerald-400/10",
        },
    ];

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#080B18] px-5 py-8 text-white sm:px-8 lg:px-16"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-6xl">
                {/* Heading */}
                <div className="mb-8 text-center">
                    

                    <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                        About{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                        A little introduction to my education, technical
                        interests, and journey as a developer.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Side */}
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
                            <Terminal size={16} />
                            My Journey So Far
                        </div>

                        <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
                            Learning Today,
                            <br />
                            <span className="text-slate-400">
                                Building for Tomorrow.
                            </span>
                        </h3>

                        <div className="mt-6 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                            <p>
                                Hi! I'm a Diploma in Engineering student
                                passionate about web development and
                                technology. My journey started with a
                                curiosity about how websites work, and now
                                I'm focused on turning ideas into real
                                projects.
                            </p>

                            <p>
                                I completed my SSC in 2024 and am currently
                                improving my frontend development skills
                                through hands-on projects and consistent
                                practice.
                            </p>

                            <p>
                                Alongside my studies, I serve as the
                                Secretary of my college's ICT Club, where
                                I have opportunities to contribute to
                                teamwork, communication, and technology-related
                                activities.
                            </p>

                            <p>
                                I'm at the beginning of my professional
                                journey and looking forward to my first
                                internship, collaborating with developers,
                                and gaining real-world experience.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            
                                <NavLink
                                to="/project"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
                            >
                                Explore My Work
                                <ArrowUpRight size={17} />
                            </NavLink>

                            
                            <a
                                href="/#contact"
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-violet-400 hover:text-white"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {highlights.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group rounded-2xl border border-white/10 bg-[#100D1A] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/50"
                                >
                                    <div
                                        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                                    >
                                        <Icon size={24} />
                                    </div>

                                    <h4 className="text-base font-semibold text-white">
                                        {item.title}
                                    </h4>

                                    <p className="mt-3 text-sm leading-6 text-slate-400">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Education Timeline */}
                <div className="mt-20">
                    <h3 className="mb-8 text-center text-2xl font-bold">
                        My <span className="text-violet-400">Journey</span>
                    </h3>

                    <div className="mx-auto max-w-2xl space-y-5">
                        <div className="flex gap-5 rounded-2xl border border-white/10 bg-[#100D1A] p-5 sm:p-6">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                                <GraduationCap size={22} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-violet-400">
                                    2024
                                </p>
                                <h4 className="mt-1 font-semibold">
                                    Secondary School Certificate (SSC)
                                </h4>
                                <p className="mt-2 text-sm text-slate-400">
                                    Completed my secondary education and
                                    started planning my technical career.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5 rounded-2xl border border-white/10 bg-[#100D1A] p-5 sm:p-6">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                                <Code2 size={22} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-cyan-400">
                                    Present
                                </p>
                                <h4 className="mt-1 font-semibold">
                                    Diploma & Development
                                </h4>
                                <p className="mt-2 text-sm text-slate-400">
                                    Continuing my diploma studies while
                                    learning frontend development and
                                    building projects.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5 sm:p-6">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-400">
                                <BriefcaseBusiness size={22} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-fuchsia-400">
                                    Next Goal
                                </p>
                                <h4 className="mt-1 font-semibold">
                                    First Internship
                                </h4>
                                <p className="mt-2 text-sm text-slate-400">
                                    Ready to learn from real projects,
                                    contribute to a team, and grow as a
                                    frontend developer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journeylife;
