
import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const Notfound = () => {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080B18] px-5 text-white">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

            <div className="relative z-10 text-center">

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
                    Error 404
                </p>

                <h1 className="text-8xl font-black tracking-tighter sm:text-9xl">
                    <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                        404
                    </span>
                </h1>

                <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
                    Page Not Found
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                    Oops! The page you're looking for doesn't exist
                    or may have been moved.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">

                    <Link
                        to="/"
                        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 text-sm font-semibold transition hover:scale-105"
                    >
                        <Home size={17} />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-violet-400 hover:text-white"
                    >
                        <ArrowLeft size={17} />
                        Go Back
                    </button>

                </div>

                <p className="mt-12 text-xs tracking-widest text-slate-600">
                    LOST IN THE DIGITAL SPACE?
                </p>

            </div>
        </section>
    );
};

export default Notfound;
