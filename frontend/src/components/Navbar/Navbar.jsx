import { GraduationCap } from "lucide-react";

function Navbar() {
    return (
        <header className="fixed top-5 left-0 right-0 z-50 flex justify-center">

            <nav className="w-[92%] max-w-7xl bg-white/80 backdrop-blur-xl border border-white/30 shadow-xl rounded-2xl">

                <div className="px-8 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-3">

                        <div className="bg-indigo-600 text-white p-2 rounded-xl">
                            <GraduationCap size={22} />
                        </div>

                        <span className="text-2xl font-bold text-slate-900">
                            StudyPilot AI
                        </span>

                    </div>

                    {/* Menu */}
                    <div className="hidden md:flex items-center gap-8 text-slate-600">

                        <button
                            onClick={() =>
                                document
                                    .getElementById("features")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="hover:text-indigo-600 transition"
                        >
                            Features
                        </button>

                        <button className="hover:text-indigo-600 transition">
                            About
                        </button>

                        <button className="hover:text-indigo-600 transition">
                            Contact
                        </button>

                    </div>

                    {/* Right Buttons */}
                    <div className="flex items-center gap-3">

                        <button className="px-5 py-2 rounded-xl hover:bg-slate-100 transition">
                            Login
                        </button>

                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl shadow-lg transition">
                            Get Started
                        </button>

                    </div>

                </div>

            </nav>

        </header>
    );
}

export default Navbar;