export default function Navbar() {
    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <div className="text-2xl font-bold text-blue-600">
                    StudyPilot AI 🚀
                </div>

                <div className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <a href="#" className="hover:text-blue-600 transition">
                        Features
                    </a>

                    <a href="#" className="hover:text-blue-600 transition">
                        About
                    </a>

                    <a href="#" className="hover:text-blue-600 transition">
                        Contact
                    </a>
                </div>

                <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg hover:bg-gray-100">
                        Login
                    </button>

                    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                        Get Started
                    </button>
                </div>

            </div>
        </nav>
    );
}