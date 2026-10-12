
import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Braces,
  Atom,
  BrainCircuit,
  Terminal,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    name: "HTML & CSS",
    level: "Advanced",
    percentage: 90,
    icon: Code2,
    color: "from-violet-500 to-purple-400",
    glow: "group-hover:shadow-purple-500/10",
    skills: [
      "Responsive layouts",
      "Flexbox & CSS Grid",
      "Modern UI design",
    ],
    focus: [
      "Advanced animations",
      "Accessibility",
      "Performance optimization",
    ],
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    percentage: 65,
    icon: Braces,
    color: "from-cyan-500 to-blue-400",
    glow: "group-hover:shadow-cyan-500/10",
    skills: [
      "Variables & functions",
      "DOM manipulation",
      "Async/await & APIs",
    ],
    focus: [
      "Advanced concepts",
      "Problem solving",
      "Debugging",
    ],
  },
  {
    name: "React",
    level: "Intermediate",
    percentage: 60,
    icon: Atom,
    color: "from-cyan-500 to-blue-400",
    glow: "group-hover:shadow-cyan-500/10",
    skills: [
      "Components & props",
      "Hooks & state",
      "Routing & APIs",
    ],
    focus: [
      "Reusable architecture",
      "State management",
      "Testing & performance",
    ],
  },
  {
    name: "Python",
    level: "Advanced",
    percentage: 85,
    icon: Terminal,
    color: "from-violet-500 to-purple-400",
    glow: "group-hover:shadow-purple-500/10",
    skills: [
      "OOP & file handling",
      "Data structures",
      "Automation & APIs",
    ],
    focus: [
      "Real-world projects",
      "Clean, modular code",
      "Advanced problem solving",
    ],
  },
  {
    name: "Machine Learning",
    level: "Beginner",
    percentage: 30,
    icon: BrainCircuit,
    color: "from-amber-400 to-yellow-500",
    glow: "group-hover:shadow-amber-500/10",
    skills: [
      "NumPy & Pandas",
      "Data preprocessing",
      "ML fundamentals",
    ],
    focus: [
      "Train ML models",
      "Model evaluation",
      "Learn scikit-learn",
    ],
  },
];

const LanguageProficiency = () => {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(
    skills.map(() => 0)
  );

  // Start animation when the section enters the viewport
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Animate percentage counters
  useEffect(() => {
    if (!started) return;

    let frame;
    const duration = 1400;
    let startTime;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      // Ease-out animation
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(
        skills.map((skill) =>
          Math.round(skill.percentage * eased)
        )
      );

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
          <Code2 size={17} />
          Skills & Expertise
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Language{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Proficiency
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
          My current skills, experience, and the areas
          I'm focusing on to keep growing.
        </p>
      </div>

      {/* Skill cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <article
              key={skill.name}
              className={`group rounded-2xl border border-slate-800/90 bg-[#0e1324]/90 p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-xl ${skill.glow} sm:p-6`}
            >
              {/* Skill name and percentage */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 text-white`}
                  >
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h3>

                    <p
                      className={`mt-1 bg-gradient-to-r ${skill.color} bg-clip-text text-sm font-medium text-transparent`}
                    >
                      {skill.level}
                    </p>
                  </div>
                </div>

                <div
                  className={`shrink-0 text-2xl font-bold tabular-nums bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                >
                  {counts[index]}%
                </div>
              </div>

              {/* Progress bar */}
              <div
                className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800"
                role="progressbar"
                aria-label={`${skill.name} proficiency`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={counts[index]}
              >
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-[width] duration-1000 ease-out`}
                  style={{
                    width: `${counts[index]}%`,
                  }}
                />
              </div>

              {/* Skills and focus */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Key Skills
                  </h4>

                  <ul className="space-y-2">
                    {skill.skills.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs leading-5 text-slate-400 sm:text-sm"
                      >
                        <span className="mt-1 text-purple-400">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l border-slate-800 pl-4">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Practice Focus
                  </h4>

                  <ul className="space-y-2">
                    {skill.focus.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs leading-5 text-slate-400 sm:text-sm"
                      >
                        <span className="mt-1 text-cyan-400">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Note */}
      <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs leading-6 text-slate-500 sm:text-sm">
        <Sparkles
          size={15}
          className="shrink-0 text-purple-400"
        />
        Percentages represent my current self-assessment
        and may change as I gain experience.
      </p>
    </section>
  );
};

export default LanguageProficiency;
