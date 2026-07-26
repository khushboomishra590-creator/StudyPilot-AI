import DashboardPreview from "../DashboardPreview/DashboardPreview";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center pt-24">

            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-30"></div>

            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-sky-300 rounded-full blur-3xl opacity-20"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-indigo-600 font-semibold uppercase tracking-widest">
                        ✨ AI POWERED PRODUCTIVITY PLATFORM
                    </p>

                    <h1 className="text-6xl lg:text-7xl font-black mt-6 leading-tight text-slate-900">
                        Master Your Semester
                        <br />
                        with AI.
                    </h1>

                    <p className="mt-8 text-xl text-slate-600 leading-8 max-w-xl">
                        Organize your semester, generate quizzes,
                        summarize notes and track your progress
                        using AI.
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-slate-500">
                        ⭐⭐⭐⭐⭐
                        <span>
                            Trusted by students worldwide
                        </span>
                    </div>

                    <div className="flex gap-5 mt-10">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl shadow-lg transition">
                            Get Started
                        </button>

                        <button className="bg-white border border-slate-300 px-8 py-4 rounded-2xl hover:bg-slate-50 transition">
                            Watch Demo
                        </button>
                    </div>
                </motion.div>

                {/* Right Dashboard */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    <DashboardPreview />
                </motion.div>

            </div>

        </section>
    );
}

export default Hero;