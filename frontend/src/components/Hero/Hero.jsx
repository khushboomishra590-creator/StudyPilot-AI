import DashboardPreview from "../DashboardPreview/DashboardPreview";

function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">

            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Side */}
                <div>

                    <p className="text-blue-600 font-semibold uppercase">
                        AI Powered Study Assistant
                    </p>

                    <h1 className="text-6xl font-extrabold mt-4 leading-tight">
                        Study Smarter.
                        <br />
                        Score Higher.
                        <br />
                        Stress Less.
                    </h1>

                    <p className="mt-6 text-gray-600 text-xl">
                        Plan your semester, generate quizzes,
                        summarize notes and stay ahead with AI.
                    </p>

                    <div className="flex gap-4 mt-10">

                        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700">
                            Get Started
                        </button>

                        <button className="border px-8 py-4 rounded-xl">
                            Watch Demo
                        </button>

                    </div>

                </div>

                {/* Right Side */}
                <DashboardPreview />

            </div>

        </section>
    );
}

export default Hero;