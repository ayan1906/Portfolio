import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Download,
  Printer,
  ArrowLeft,
  Mail,
  Phone,
  Globe,
  MapPin,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  FileText,
} from "lucide-react";
import { fadeUp } from "@/components/motionVariants";

const CV = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("adasr0099@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      {/* Background Ambience Glow */}
      <div className="pointer-events-none fixed -top-40 left-1/2 -z-10 h-96 w-full -translate-x-1/2 max-w-5xl rounded-full bg-gradient-to-b from-purple-600/15 via-cyan-500/10 to-transparent blur-3xl no-print" />

      <div className="mx-auto max-w-4xl">
        {/* Top Control Bar / Actions (Hidden during print) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 no-print"
        >
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white sm:text-sm"
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to Portfolio
            </Link>

            <span className="hidden items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300 sm:inline-flex">
              <FileText size={13} />
              Curriculum Vitae
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-gray-300 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-gray-300 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
              title="Print Resume (Ctrl + P)"
            >
              <Printer size={15} />
              <span>Print</span>
            </button>

            <a
              href="/resumeayan.pdf"
              download="Sakin_Arshad_Ayan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-purple-900/30 transition hover:from-violet-500 hover:to-purple-500 sm:text-sm"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>
          </div>
        </motion.div>

        {/* =========================================================================
            RESUME SHEET CONTAINER:
            Faithfully styled according to resumeayan.pdf layout, font, rules & structure.
            Looks like an authentic crisp A4 printed document.
           ========================================================================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full rounded-2xl bg-white p-6 text-black shadow-2xl shadow-purple-950/30 sm:p-10 md:p-14 lg:p-16 print:m-0 print:w-full print:rounded-none print:p-0 print:shadow-none"
          style={{
            fontFamily:
              'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          }}
        >
          {/* HEADER SECTION */}
          <header className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-[32px]">
              Sakin Arshad Ayan
            </h1>
            <p className="mt-1 text-sm font-semibold text-gray-700 sm:text-base">
              Frontend Web Developer
            </p>

            {/* Contact details row */}
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-600 sm:text-[13px]">
              <a
                href="tel:+8801708561481"
                className="transition hover:text-purple-700"
              >
                +880 1708 561481
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="mailto:adasr0099@gmail.com"
                className="transition hover:text-purple-700"
              >
                adasr0099@gmail.com
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="https://portfoliomain-snowy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 underline decoration-gray-300 underline-offset-2 transition hover:text-purple-700"
              >
                https://portfoliomain-snowy.vercel.app/
              </a>
            </div>

            {/* Address */}
            <p className="mt-1 text-xs text-gray-600 sm:text-[13px]">
              Mirpur 11 road 10, Lane 4 House 16, Dhaka, Dhaka 1216, Bangladesh
            </p>
          </header>

          {/* OBJECTIVE SECTION */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 sm:text-[13px]">
              OBJECTIVE
            </h2>
            <div className="my-1.5 h-[1.5px] w-full bg-gray-400/80" />
            <p className="text-xs leading-relaxed text-gray-800 sm:text-[13px]">
              A highly motivated and detail-oriented professional seeking a challenging role in IT Firm where I can leverage my expertise in [Skill Area] to drive organizational growth and achieve measurable results.
            </p>
          </section>

          {/* SUMMARY SECTION */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 sm:text-[13px]">
              SUMMARY
            </h2>
            <div className="my-1.5 h-[1.5px] w-full bg-gray-400/80" />
            <p className="text-xs leading-relaxed text-gray-800 sm:text-[13px]">
              Passionate Frontend Web Developer specializing in React.js, JavaScript (ES6+), and Tailwind CSS. Experienced in building responsive web applications, managing state with Context API. Strong foundation in Python scripting and UI optimization, with a focus on writing clean, modular code.
            </p>
          </section>

          {/* EXPERIENCE SECTION */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 sm:text-[13px]">
              EXPERIENCE
            </h2>
            <div className="my-1.5 h-[1.5px] w-full bg-gray-400/80" />

            {/* Role 1: Frontend Web Developer */}
            <div className="mb-5">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h3 className="text-xs font-bold text-gray-900 sm:text-[13.5px]">
                  Frontend Web Developer
                </h3>
                <span className="text-xs font-medium text-gray-600 sm:text-[12px]">
                  Jan 2025 – Present
                </span>
              </div>
              <p className="text-xs italic text-gray-700 sm:text-[12.5px]">
                Self-Developed - Dhaka, Bangladesh
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-800 sm:text-[13px]">
                Focused on designing, developing, and deploying responsive web applications using React.js, Redux, JavaScript (ES6+), and Tailwind CSS. Experienced in managing complex application state, and building modern user interfaces.
              </p>
              <ul className="mt-2 list-disc pl-4 text-xs leading-relaxed text-gray-800 sm:text-[13px]">
                <li>
                  Developed reusable UI components and implemented client-side routing using React Router to ensure smooth, single-page application performance.
                </li>
              </ul>

              {/* Key Achievements */}
              <div className="mt-2.5">
                <p className="text-xs font-semibold text-gray-900 sm:text-[12.5px]">
                  Key Achievements:
                </p>
                <ul className="mt-1 list-disc pl-4 text-xs leading-relaxed text-gray-800 sm:text-[13px]">
                  <li>
                    Deployed 5+ responsive web projects and digital registration portals on Vercel with 99% uptime and mobile-first responsiveness.
                  </li>
                </ul>
              </div>
            </div>

            {/* Role 2: Secretary */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h3 className="text-xs font-bold text-gray-900 sm:text-[13.5px]">
                  Secretary
                </h3>
                <span className="text-xs font-medium text-gray-600 sm:text-[12px]">
                  Jul 2026 – Present
                </span>
              </div>
              <p className="text-xs italic text-gray-700 sm:text-[12.5px]">
                CPI ICT Club - Bangladesh
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-800 sm:text-[13px]">
                Collaborated on managing technical event workflows for student initiatives.
              </p>
              <ul className="mt-2 list-disc pl-4 text-xs leading-relaxed text-gray-800 sm:text-[13px]">
                <li>
                  Collaborated with team "Dynamic Devs" during CPI TECH FEST to design and present software solutions.
                </li>
              </ul>
            </div>
          </section>

          {/* EDUCATION SECTION */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 sm:text-[13px]">
              EDUCATION
            </h2>
            <div className="my-1.5 h-[1.5px] w-full bg-gray-400/80" />

            {/* Education 1 */}
            <div className="mb-4">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h3 className="text-xs font-bold text-gray-900 sm:text-[13px]">
                  Diploma in Engineering in Computer Science & Technology
                </h3>
                <span className="text-xs font-medium text-gray-600 sm:text-[12px]">
                  2024
                </span>
              </div>
              <p className="text-xs text-gray-700 sm:text-[12.5px]">
                CPI Management & Technology - Dhaka, Bangladesh
              </p>
            </div>

            {/* Education 2 */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h3 className="text-xs font-bold text-gray-900 sm:text-[13px]">
                  SSC in Commerce
                </h3>
                <span className="text-xs font-medium text-gray-600 sm:text-[12px]">
                  2024
                </span>
              </div>
              <p className="text-xs text-gray-700 sm:text-[12.5px]">
                Mirpur Ideal school - Dhaka, Bangladesh
              </p>
              <p className="mt-0.5 text-xs font-medium text-gray-600 sm:text-[12px]">
                CGPA: 3.94
              </p>
            </div>
          </section>

          {/* SKILLS SECTION */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 sm:text-[13px]">
              SKILLS
            </h2>
            <div className="my-1.5 h-[1.5px] w-full bg-gray-400/80" />

            <div className="flex flex-col gap-2 text-xs leading-relaxed sm:text-[13px]">
              <div>
                <span className="font-semibold text-gray-900">Professional Skills: </span>
                <span className="text-gray-800">
                  Html, CSS, Tailwind CSS, React, Javascript, Python, Responsive Web Design
                </span>
              </div>

              <div>
                <span className="font-semibold text-gray-900">Soft Skills: </span>
                <span className="text-gray-800">
                  Quick Learning, Problem Solving, Team Collaboration
                </span>
              </div>

              <div>
                <span className="font-semibold text-gray-900">Computer Skills: </span>
                <span className="text-gray-800">
                  Git & GitHub, VS Code, MS Office Suite
                </span>
              </div>

              <div>
                <span className="font-semibold text-gray-900">Languages: </span>
                <span className="text-gray-800">Bangla, English</span>
              </div>
            </div>
          </section>
        </motion.div>

        {/* Bottom CTA / Actions (Hidden during print) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="mt-10 flex flex-wrap items-center justify-center gap-4 no-print"
        >
          <a
            href="/resumeayan.pdf"
            download="Sakin_Arshad_Ayan_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-purple-900/30 transition hover:from-violet-500 hover:to-purple-500"
          >
            <Download size={18} />
            Download Official PDF
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-gray-200 transition hover:border-purple-400/40 hover:bg-purple-500/10"
          >
            <span>Get in Touch</span>
          </Link>
        </motion.div>
      </div>

      {/* Print Specific CSS Styles */}
      <style>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          .no-print, header, nav, footer, #mobile-navigation {
            display: none !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CV;
