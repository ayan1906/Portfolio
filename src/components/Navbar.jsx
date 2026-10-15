import { motion } from "motion/react";
import { EASE } from "./motionVariants";

import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  House,
  IdCard, Gamepad2, FolderOpenDot, Award, Route

} from "lucide-react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <House /> },
    { name: "About Me", path: "/about", icon: <IdCard /> },
    { name: "Skills", path: "/skills", icon: <Award /> },
    { name: "Projects", path: "/project", icon: <FolderOpenDot /> },
    { name: "Journey", path: "/journey", icon: <Route /> },
    { name: "Challenges", path: "/challenge", icon: <Gamepad2 /> },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <>

      <motion.header initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, ease: EASE }} className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#08060d]/80 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group flex shrink-0 items-center"
          >
            <img
              src="/images/logo%20bf.png"
              alt="Ayan Logo"
              className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 rounded-full border border-white/10 bg-[#100a1b]/90 px-8 py-3 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative whitespace-nowrap py-1 text-sm font-medium transition-colors duration-300 ${isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">


            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:border-purple-400/60 hover:bg-purple-500/20"
            >
              Let's Talk
              <ArrowUpRight size={15} />
            </motion.a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">


            <motion.button whileTap={{ scale: 0.9 }}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-purple-400/50"
            >
              <Menu size={22} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-[3px] transition-opacity duration-300 lg:hidden ${menuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
      />

      {/* Right-side Mobile Drawer */}
      <motion.aside initial={false} animate={{ x: menuOpen ? 0 : "100%" }} transition={{ type: "spring", stiffness: 220, damping: 32 }}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[min(85%,360px)] flex-col border-l border-purple-400/20 bg-[#0b0713] shadow-[-20px_0_80px_rgba(124,58,237,0.15)] lg:hidden`}
      >
        {/* Drawer Header */}
        <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-white/10 px-5">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo%20bf.png"
              alt=""
              className="h-11 w-11 object-contain"
            />
            <div>
              <p className="text-base font-bold tracking-wider text-white">
                AYAN<span className="text-purple-700">.</span>
              </p>

            </div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
          >
            <X size={21} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto px-5 py-7">
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-400/80">
            Explore Portfolio
          </p>

          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${index * 35}ms` : "0ms" }}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-medium transition-all duration-200 ${isActive
                    ? "border-purple-400/25 bg-purple-500/15 text-purple-300"
                    : "border-transparent text-gray-400 hover:border-white/10 hover:bg-white/5 hover:text-white"
                  } ${menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-5 opacity-0"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-3">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${isActive
                          ? "bg-purple-400 shadow-[0_0_10px_#a855f7]"
                          : "bg-gray-700 group-hover:bg-purple-400"
                          }`}
                      />
                      {link.icon}
                      {link.name}
                    </span>

                    <ArrowUpRight
                      size={15}
                      className={`transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${isActive
                        ? "text-purple-300"
                        : "text-gray-600 group-hover:text-purple-300"
                        }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Contact */}
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-950/30 transition-colors hover:from-purple-500 hover:to-violet-500"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </motion.a>
        </nav>

        {/* Drawer Footer */}
        <div className="shrink-0 border-t border-white/10 px-6 py-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
            <span className="text-xs text-gray-400">
              Personal Portfolio
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-600">
            © {new Date().getFullYear()} Ayan
          </p>
        </div>
      </motion.aside>
    </>
  );
};

export default Navbar;